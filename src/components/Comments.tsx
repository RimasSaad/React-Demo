// Comments.tsx
// This component fetches and displays comments for a specific post ID using getPostComments API function.

import React, { useEffect, useState } from 'react';
import { getPostComments } from '../api/api';
import type { Comment } from '../types/types';

const Comments: React.FC = () => {
  // State to store fetched comments
  const [comments, setComments] = useState<Comment[]>([]);

  // useEffect runs once when the component mounts to fetch comments for a specific post
  useEffect(() => {
    getPostComments(1) // Fetch comments 
      .then(data => setComments(data)) // Update state with fetched comments
      .catch(error => console.error(error));
  }, []); // Runs only once on mount

  return (
    <div>
      <h2>Comments for Post: </h2>
      {comments.length > 0 ? (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <p><strong>ID:</strong> {comment.id}</p>
              <p><strong>{comment.name}</strong> ({comment.email})</p>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading comments...</p>
      )}
    </div>
  );
};

export default Comments;
