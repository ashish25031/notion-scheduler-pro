# NotionScheduler Pro

## AI-Powered Content Publishing Automation System

Automate your content publishing pipeline from Notion databases to multiple platforms using Claude AI and Notion MCP.

### Features

- **Smart Content Pipeline**: Automatically processes articles stored in a Notion database
- **AI-Powered Optimization**: Uses Claude AI via Notion MCP to analyze content and suggest improvements
- **Multi-Platform Publishing**: Deploy to DEV, Medium, LinkedIn, and Hashnode simultaneously
- **Analytics Dashboard**: Real-time tracking of post performance
- **Content Calendar**: Visual scheduling with conflict detection
- **Team Collaboration**: Review and approve content before publishing

### Tech Stack

- **Node.js** with TypeScript
- **Notion MCP** for database operations
- **Claude API** for AI content analysis
- **Express.js** for backend APIs
- **React** for admin dashboard

### Installation

```bash
git clone https://github.com/ashish25031/notion-scheduler-pro
cd notion-scheduler-pro
npm install
```

### Configuration

1. Copy `.env.example` to `.env`
2. Add your credentials:
   ```
   NOTION_TOKEN=your_notion_token
   NOTION_DATABASE_ID=your_database_id
   CLAUDE_API_KEY=your_claude_api_key
   OPENAI_API_KEY=your_openai_key
   ```

### Running the Application

```bash
npm run dev
```

Visit `http://localhost:3000` to access the dashboard.

### Project Structure

```
src/
├── notion/
│   └── notionClient.ts        # Notion MCP integration
├── ai/
│   └── contentProcessor.ts    # Claude AI content analysis
├── publishers/
│   └── publisherService.ts    # Multi-platform publishing
├── analytics/
│   └── analyticsEngine.ts     # Performance tracking
├── dashboard/
│   └── routes.ts              # Admin dashboard routes
└── index.ts                   # Main server file
```

### Key Components

#### notionClient.ts
Manages connection to Notion database using Notion MCP

#### contentProcessor.ts
Processes content with Claude AI for optimization and metadata generation

#### publisherService.ts
Handles publishing to multiple platforms with status tracking

#### analyticsEngine.ts
Tracks performance metrics and provides insights

### Usage Example

```typescript
const scheduler = new NotionScheduler({
  notionToken: process.env.NOTION_TOKEN,
  notionDatabaseId: process.env.NOTION_DATABASE_ID,
  claudeApiKey: process.env.CLAUDE_API_KEY
});

await scheduler.processArticles();
await scheduler.publishToMultiplePlatforms();
```

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### License

MIT

### Support

For support, email support@example.com or open an issue on GitHub.
