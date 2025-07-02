# React + TypeScript + Vite

This project uses **React**, **TypeScript**, and **Vite** to build a fast, modern frontend application with hot module replacement (HMR) and ESLint integration.

## Project Description
- Framework: React with TypeScript
- Build tool: Vite
- HTTP client: Axios
- API: JSONPlaceholder
- It fetches and displays posts, a single post by ID, and comments for a specific post in the browser, using clean React component-based architecture.

## Main Features
- Uses useState and useEffect React hooks
- Implements three API functions:
  - Fetch all posts
  - Fetch a single post by ID
  - Fetch comments for a post ID
- Displays data dynamically using separate React components:
  - Posts component
  - PostDetail component
  - Comments component
- Uses TypeScript interfaces for type safety
- Organized with clean folder structure:
  - api/ for API functions
  - components/ for React components
  - types/ for TypeScript interfaces
- Uses conditional rendering and buttons in App.tsx to display each component as needed

