import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: uuidv4(),
      title,
      content,
    };
    addPost(newPost);
    setTitle('');
    setContent('');
  };

  return (
    <div className="create-post">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
