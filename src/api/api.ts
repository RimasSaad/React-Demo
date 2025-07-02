// api.ts
// This file contains Axios functions for fetching data from the API.

import axios from 'axios';
import type { Post, Comment } from '../types/types'; // Import the Post type from types.ts

// Define the BASE_URL
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Function to get all posts from the API: 
// returns Promise<Post[]> - a promise that returns an array of posts
export async function getAllPosts(): Promise<Post[]> {
  try {
    const response = await axios.get(`${BASE_URL}/posts`, { timeout: 10000 }); // 10 seconds
    console.log('All Posts:', response.data); 
    return response.data; 
  } catch (error) {
    console.error('Error fetching all posts:', error);
    throw error; 
  }
}

// Function to get a single post by ID
// param id - The ID of the post to fetch
// returns Promise<Post> - A promise that resolves to a single post object

export async function getPostById(id: number): Promise<Post> {
  try {
    const response = await axios.get<Post>(`${BASE_URL}/posts/${id}`, { timeout: 10000 }); // 10 seconds
    console.log(`Post ${id}:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    throw error;
  }
}

// Function to get comments for a specific post by post ID
// param postId - The ID of the post to fetch comments for
// returns Promise<Comment[]> - A promise that returns an array of comments

export async function getPostComments(postId: number): Promise<Comment[]> {
  try {
    const response = await axios.get<Comment[]>(`${BASE_URL}/posts/${postId}/comments`, { timeout: 10000 }); // 10 seconds
    console.log(`Comments for Post ${postId}:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error);
    throw error;
  }
}



