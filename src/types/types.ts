// types.ts
// This file defines TypeScript interfaces for data structures used in the project.

// Post interface
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Comment interface
export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
