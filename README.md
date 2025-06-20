# News.Does.Cool

A modern news application built with Next.js, showcasing routing and page rendering capabilities.

## 📋 Project Overview

News.Does.Cool is a web application that demonstrates:
- Next.js App Router implementation
- Page rendering and routing in Next.js
- Dynamic routes with parameters
- TypeScript integration with React components
- SQLite database integration
- AWS S3 integration for cloud storage
- Modern web development practices

## 🚀 Technologies Used

- **Frontend**: 
  - [Next.js 15](https://nextjs.org/) - React framework with App Router
  - [React 19](https://react.dev/) - UI library
  - [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
  - CSS Modules - For component-scoped styling
  - [Turbopack](https://turbo.build/pack) - Incremental bundler for development

- **Backend & Data**:
  - [SQLite](https://www.sqlite.org/) - Lightweight database
  - [AWS S3](https://aws.amazon.com/s3/) - Cloud storage for assets

- **Testing**:
  - [Jest](https://jestjs.io/) - Testing framework
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - React component testing
  - [jest-dom](https://github.com/testing-library/jest-dom) - Custom DOM element matchers

- **Development Tools**:
  - [ESLint](https://eslint.org/) - Code linting
  - [Prettier](https://prettier.io/) - Code formatting

## 🗂️ Project Structure

```
news.does.cool/
├── app/                  # Next.js App Router pages
│   ├── globals.css       # Global styles
│   ├── icon.jpg          # Application icon
│   ├── layout.tsx        # Root layout with metadata
│   ├── default.tsx          # Home page component
│   └── news/             # News section
│       ├── default.tsx      # News listing page
│       └── [id]/         # Dynamic route for news articles
│           └── default.tsx  # Individual news article page
├── assets/               # Static assets (images, icons)
├── public/               # Public static files
├── .env.local            # Environment variables
├── eslint.config.mjs     # ESLint configuration
├── initdb.js             # Database initialization script
├── jest.config.js        # Jest configuration
├── jest.setup.js         # Jest setup
├── jsconfig.json         # JavaScript configuration
├── next.config.mjs       # Next.js configuration
├── next.config.ts        # TypeScript Next.js configuration
├── .prettierrc           # Prettier configuration
├── .prettierignore       # Prettier ignore file
└── tsconfig.json         # TypeScript configuration
```

### Key Components

#### Page Components

- **RootLayout**: The main layout component that wraps all pages in the application. It includes the HTML structure and metadata.
- **HomePage**: The home page component that displays the main content of the application.
- **NewsPage**: The news listing page that displays links to individual news articles.
- **NewsDetailsPage**: The dynamic page component that displays individual news articles based on the ID parameter.

#### TypeScript Integration

The project uses TypeScript for type safety. Key TypeScript features implemented:

- **React Component Types**: Proper typing for React components, including props and children.
- **Next.js Specific Types**: Integration with Next.js types for metadata, layouts, and pages.
- **Static Type Checking**: Ensuring type safety throughout the application to prevent runtime errors.

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/news.does.cool.git
   cd news.does.cool
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### AWS S3 Configuration

The project uses AWS S3 for cloud storage of assets. Configure your AWS credentials in the `.env.local` file:

```
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=your_region
AWS_S3_BUCKET=your_bucket_name
```

### Development

Run the development server with Turbopack for faster builds:
```bash
npm run dev
```

This uses Turbopack, an incremental bundler, for faster development builds and hot module replacement.

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

Navigate to [http://localhost:3000/news](http://localhost:3000/news) to see the news listing page.

### Building for Production

Build the application for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 🧪 Testing

The project includes comprehensive tests for components and pages.

Run all tests:
```bash
npm test
```

Run tests in watch mode (useful during development):
```bash
npm run test:watch
```

### Component Tests

The project includes tests for the following components:

- **Layout Component**: Tests that the root layout renders correctly with proper metadata and children.
- **HomePage Component**: Tests that the home page renders with the correct heading and content.

Tests are written using Jest and React Testing Library to ensure components render correctly and maintain expected functionality.

## 📦 Deployment

The application can be deployed on [Vercel](https://vercel.com/), the platform from the creators of Next.js:

1. Push your code to a Git repository (GitHub, GitLab, BitBucket)
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
