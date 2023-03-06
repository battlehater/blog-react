import React from "react";
import { Comments } from "../Comments";

export const Post = ({ post, user, comments, onUserClick }) => {
  const count = comments && comments.length
  return (
    <div className="post">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>
      <button onClick={() => onUserClick(user)} className="post-author">
        <strong>Author: {user?.name}</strong>
      </button>
      {comments && <h3>Comments <b>{count}</b></h3>}
      {comments && comments.map(comment => {
        return (
          <Comments key={comment.id} comment={comment} />
        )
      })}
    </div>
  );
};
