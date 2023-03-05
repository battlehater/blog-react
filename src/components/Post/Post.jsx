import React from "react";

export const Post = ({ post, user, onUserClick }) => {
  return (
    <div className="post">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>
      <button onClick={() => onUserClick(user)} className="post-author">
        <strong>Author: {user?.name}</strong>
      </button>
    </div>
  );
};
