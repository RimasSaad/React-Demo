// PostDetail.tsx
// This component fetches and displays a single post by ID using getPostById API function.

import React, { useEffect, useState } from 'react';
import { getPostById } from '../api/api';
import type { Post } from '../types/types';

const PostDetail: React.FC = () => {
  // State to store the fetched post
  const [post, setPost] = useState<Post | null>(null);

  // useEffect runs once when the component mounts to fetch a specific post
  useEffect(() => {
    getPostById(1) // Fetch post 
      .then(data => setPost(data)) // Update state with the fetched post
      .catch(error => console.error(error));
  }, []); // Ensures this runs only once on mount

  return (
    <div>
      <h2>Post Detail</h2>
      {post ? (
        <div>
            <p><strong>ID:</strong> {post.id}</p>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
};

export default PostDetail;
