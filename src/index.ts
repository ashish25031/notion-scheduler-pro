import express from 'express';
import dotenv from 'dotenv';
import { NotionScheduler } from './services/notionScheduler';
import { ContentProcessor } from './services/contentProcessor';
import { PublisherService } from './services/publisherService';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Initialize services
const notionScheduler = new NotionScheduler();
const contentProcessor = new ContentProcessor();
const publisherService = new PublisherService();

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'NotionScheduler Pro is running' });
});

app.post('/api/process', async (req, res) => {
  try {
    const articles = await notionScheduler.fetchArticles();
    const processedArticles = await contentProcessor.processArticles(articles);
    res.json({ success: true, count: processedArticles.length });
  } catch (error) {
    console.error('Error processing articles:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/publish', async (req, res) => {
  try {
    const articles = await notionScheduler.getReadyToPublish();
    const results = await publisherService.publishToMultiplePlatforms(articles);
    res.json({ success: true, published: results });
  } catch (error) {
    console.error('Error publishing articles:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/dashboard', async (req, res) => {
  try {
    const stats = await notionScheduler.getDashboardStats();
    res.json(stats);
  } catch (error) {
    console.error('Error fetching dashboard:', error);
    res.status(500).json({ error: error.message });
  }
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`NotionScheduler Pro server running on port ${port}`);
  console.log(`Visit http://localhost:${port} to access the dashboard`);
});

export default app;
