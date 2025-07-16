# TechTen Frontend

This is the frontend for the TechTen website, built with React.

## Backend Integration

This project uses a Hapi.js proxy server to communicate with the Notion API for backend functionality.

### Local Development

To run the project locally, you need to run both the React development server and the Hapi.js proxy server.

**1. Run the Hapi.js Proxy Server:**

The proxy server is located in the `../hapi-notion-proxy` directory.

```bash
cd ../hapi-notion-proxy
npm install
npm start
```

**2. Run the React Development Server:**

```bash
npm install
npm start
```

### Environment Variables

The following environment variables are required for the Notion integration. These should be placed in a `.env` file in the `../hapi-notion-proxy` directory.

```
REACT_APP_NOTION_API_TOKEN=
REACT_APP_NOTION_EVENTS_DB_ID=
REACT_APP_NOTION_BLOGS_DB_ID=
REACT_APP_NOTION_COURSES_DB_ID=
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.
