# React + TypeScript + Vite

This project uses **React**, **TypeScript**, and **Vite** to build a fast, modern frontend application with hot module replacement (HMR) and ESLint integration.

## Project Description
- Framework: React with TypeScript
- Build tool: Vite
- HTTP client: Axios
- API: JSONPlaceholder
- 
## The app fetches and displays:
- All posts  
- A single post by user-input ID  
- Comments for a post by user-input ID

## Main Features
- Uses useState and useEffect React hooks
- Implements three API functions:
  - Fetch all posts
  - Fetch single post by user-input ID
  - Fetch comments by user-input post ID
- Displays data dynamically using separate React components:
  - Posts component
  - PostDetail component
  - Comments component
- Uses TypeScript interfaces for type safety
- Organized with clean folder structure:
  - api/ for API functions
  - components/ for React components
  - types/ for TypeScript interfaces
- Uses buttons and user input fields to dynamically fetch and display all posts or post or comments by ID
- Implements friendly error handling with user-friendly messages for failed requests  
- Implements loading states to indicate data is being fetched, enhancing user experience

