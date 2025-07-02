// Posts.tsx
// This component fetches and displays a list of posts using Axios and React hooks.

import React, { useEffect, useState } from 'react';
import type { Post } from '../types/types';
import { getAllPosts } from '../api/api';

const Posts: React.FC = () => {
  // State to hold the fetched posts data, initially an empty array
  const [posts, setPosts] = useState<Post[]>([]);

  // useEffect hook runs once when the component mounts to fetch posts
  useEffect(() => {
    getAllPosts()
      .then(data => setPosts(data)) // Update the posts state with fetched data
      .catch(error => console.error(error)); 
  }, []); // Ensures this runs only once on mount

  return (
    <div>
      <h2>Posts List</h2>
      <ul>
        {posts.map(post => (
          // Render each post as a list item with title and body
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
