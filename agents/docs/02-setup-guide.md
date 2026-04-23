# Setup Guide

## Prerequisites

Install these before writing code:

- VS Code
- Node.js
- Git
- GitHub account
- MongoDB Atlas account

## First Rule

You are not expected to know development.
You are expected to figure things out using AI.

## Frontend Setup

From the repo root:

```bash
cd frontend
npm install
npm run dev
```

Expected result:

- Vite dev server starts
- frontend opens in browser

## Backend Setup

The `backend/` folder exists but still needs project setup.

Minimum backend packages to install:

```bash
cd backend
npm install express mongoose cors dotenv nodemon
```

Recommended `package.json` scripts:

```json
{
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  }
}
```

## Suggested Backend Folder Structure

```text
backend/
  src/
    controllers/
    models/
    routes/
    config/
    server.js
```

## MongoDB Atlas Setup

1. Create a cluster in MongoDB Atlas
2. Create a database user
3. Whitelist your IP
4. Copy the connection string
5. Put it in `.env`

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

## GitHub Setup

1. One person creates the GitHub repo if not already created
2. Add all teammates as collaborators if needed
3. Everyone clones the same repo
4. Everyone works on separate branches

## Basic Run Goal

Before feature work starts, confirm:

- frontend runs
- backend runs
- backend can respond with a test route like `/api/health`
- MongoDB connection works
