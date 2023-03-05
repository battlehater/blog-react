import React from "react";

export const Post = ({ post, user }) => {
  return (
    <div className="post">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>
      <p className="post-author">
        <strong>Author: {user.name}</strong>
      </p>
    </div>
  );
};
