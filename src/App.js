import React, { useState, useEffect } from 'react';
import PostsDisplay from './components/PostsDisplay';
import CreatePost from './components/CreatePost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const editPost = (postId, updatedPost) => {
    const updatedPosts = posts.map(post =>
      post.id === postId ? { ...post, ...updatedPost } : post
    );
    setPosts(updatedPosts);
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <header>
        <h1>Posts App</h1>
      </header>
      <main>
        <section className="posts-section">
          <h2>All Posts</h2>
          <PostsDisplay posts={posts} editPost={editPost} deletePost={deletePost} />
        </section>
        <section className="create-post-section">
          <h2>Create New Post</h2>
          <CreatePost addPost={addPost} />
        </section>
      </main>
      <footer>
        <p> Thank You for post Review in GOOGLE </p>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSearch} /> Search Google
        </a>
      </footer>
    </div>
  );
};

export default App;
