import React from 'react';
import PostItem from './PostItem';

const PostsDisplay = ({ posts, editPost, deletePost }) => {
  return (
    <div className="posts-display">
      {posts.map(post => (
        <PostItem key={post.id} post={post} editPost={editPost} deletePost={deletePost} />
      ))}
    </div>
  );
};

export default PostsDisplay;
