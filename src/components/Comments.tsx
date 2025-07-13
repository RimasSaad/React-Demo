// Comments.tsx
// This component fetches and displays comments for a specific post ID using getPostComments API function.

import React, { useState } from 'react';
import { getPostComments } from '../api/api';
import type { Comment } from '../types/types';

const Comments: React.FC = () => {
  // State to store fetched comments
  const [comments, setComments] = useState<Comment[]>([]);
  // State to store user input ID
    const [postId, setPostId] = useState<number>(1); // default ID is 1
  // State to hold any error messages, initially an empty string
  const [error, setError] = useState<string>(''); 
  // State to hold the loading status, initially false
  const [loading, setLoading] = useState<boolean>(false); 

  /* useEffect runs once when the component mounts to fetch comments for a specific post
  useEffect(() => {
    setLoading(true);

    getPostComments(1) // Fetch comments 
      .then(data => {
        setComments(data); // Update the posts state with fetched data
      }) 
      .catch(error => {
        console.error(error);
        setError('Oops! We couldn’t load the comments right now. Please try again later...');
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetching data
      }); 
  }, []); // Runs only once on mount */

  // Fetches post comments based on the entered post ID when called
  const handleFetchComments = () => {
    setLoading(true); 

    getPostComments(postId) // Fetch post with postId
      .then(data => {
        setComments(data); // Update the posts state with fetched data
      })
      .catch(error => {
        console.error(error);
        setError('Oops! We couldn’t load the comments right now. Please try again later...');
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetching data
      });
  };

  return (
    <div>
      <h2>Comments for Post: </h2>
       <div>
        <input
          type="number"
          value={postId}
          onChange={(e) => setPostId(Number(e.target.value))}
          placeholder="Enter Post ID"
        />
        <button onClick={handleFetchComments}>Fetch Comments</button>
      </div>
      {loading && <p>Loading comments...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && comments.length > 0 && (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <p><strong>ID:</strong> {comment.id}</p>
              <p><strong>{comment.name}</strong> ({comment.email})</p>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comments;
