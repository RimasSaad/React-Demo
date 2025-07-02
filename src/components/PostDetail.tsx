// PostDetail.tsx
// This component fetches and displays a single post by ID using getPostById API function.

import React, { useEffect, useState } from 'react';
import { getPostById } from '../api/api';
import type { Post } from '../types/types';

const PostDetail: React.FC = () => {
  // State to store the fetched post
  const [post, setPost] = useState<Post | null>(null);
  // State to hold any error messages, initially an empty string
  const [error, setError] = useState<string>(''); 
  // State to hold the loading status, initially false
  const [loading, setLoading] = useState<boolean>(false); 

  // useEffect runs once when the component mounts to fetch a specific post
  useEffect(() => {
    setLoading(true);

    getPostById(1) // Fetch post 
      .then(data => {
        setPost(data); // Update the posts state with fetched data
      }) 
      .catch(error => {
        console.error(error);
        setError('Oops! We couldn’t load this post right now. Please try again later...');
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetching data
      }); 
  }, []);

  return (
    <div>
      <h2>Post Detail</h2>
      {loading && <p>Loading post details...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && post && (
        <div>
          <p><strong>ID:</strong> {post.id}</p>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
