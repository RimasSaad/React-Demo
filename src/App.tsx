// App.tsx
// Root component of the app. It renders the main heading and the Posts component.

import React, { useState } from 'react';
import Posts from './components/Posts';
import PostDetail from './components/PostDetail';
import Comments from './components/Comments';

function App() {
  const [view, setView] = useState<string>(''); // controls which component to show

  return (
    <div>
      <h1>API Components Example</h1>

      {/* Buttons to click */}
      <button onClick={() => setView('posts')}>Show All Posts</button>
      <button onClick={() => setView('postDetail')}>Show Post By ID</button>
      <button onClick={() => setView('comments')}>Show Comments By Post ID</button>

      {/* Conditionally show components */}
      {view === 'posts' && <Posts />}
      {view === 'postDetail' && <PostDetail />}
      {view === 'comments' && <Comments />}
    </div>
  );
}

export default App;

