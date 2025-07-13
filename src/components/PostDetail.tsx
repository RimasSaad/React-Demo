// PostDetail.tsx
// This component fetches and displays a single post by ID using getPostById API function.

import React, { useState } from 'react';
import { getPostById } from '../api/api';
import type { Post } from '../types/types';

const PostDetail: React.FC = () => {
  // State to store the fetched post
  const [post, setPost] = useState<Post | null>(null);
  // State to store user input ID
  const [postId, setPostId] = useState<number>(1); // default ID is 1
  // State to hold any error messages, initially an empty string
  const [error, setError] = useState<string>(''); 
  // State to hold the loading status, initially false
  const [loading, setLoading] = useState<boolean>(false); 

  /* useEffect runs once when the component mounts to fetch a specific post
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
  }, []); */

  // Fetches post data based on the entered post ID when called
  const handleFetchPost = () => {
    setLoading(true);

    getPostById(postId) // Fetch post with postId
      .then(data => {
        setPost(data); // Update the posts state with fetched data
      })
      .catch(error => {
        console.error(error);
        setError('Oops! We couldn’t load this post right now. Please try again later...');
        setPost(null);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetching data
      });
  };

  return (
    <div>
      <h2>Post Detail</h2>
      <div>
        <input
          type="number"
          value={postId}
          onChange={(e) => setPostId(Number(e.target.value))}
          placeholder="Enter Post ID"
        />
        <button onClick={handleFetchPost}>Fetch Post</button>
      </div>
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
