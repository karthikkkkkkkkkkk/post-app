import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const PostItem = ({ post, editPost, deletePost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editPost(post.id, { title, content });
    setIsEditing(false);
  };

  const handleDelete = () => {
    deletePost(post.id);
  };

  return (
    <div className="post-item">
      {isEditing ? (
        <div>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
          <textarea value={content} onChange={e => setContent(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} /> Edit
          </button>
          <button onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default PostItem;
