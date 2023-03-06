import React, { useCallback, useEffect, useState } from "react";
import "./Blog.css";
import apiService from "../../services/apiService";
import { Post } from "../Post";
import { UserModal } from "../UserModal";

export const Blog = (props) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await apiService.getAllPosts();
      setPosts(response);
    };

    fetchPost();
    const fetchUsers = async () => {
      const response = await apiService.getAllUsers();
      setUsers(response);
    };
    fetchUsers();

    const fetchComments = async () => {
      const responce = await apiService.getAllComments();
      setComments(responce);
    };
    fetchComments();
  }, []);

  // useEffect(() => {
  //   console.log(posts);
  // }, [posts]);

  const getUserById = useCallback(
    (userId) => {
      return users.find((user) => user.id === userId);
    },
    [users]
  );

  const getCommentsById = useCallback((id) => {
    return comments.filter(comment => comment.postId === id)
  }, [comments]);

  return (
    <section className="blog">
      <h1 className="blog-title">Blog</h1>
      <div className="blog-posts">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              post={post}
              user={getUserById(post.userId)}
              comments={getCommentsById(post.id)}
              onUserClick={setSelectedUser}
            />
          );
        })}
      </div>
      <UserModal
        user={selectedUser}
        open={Boolean(selectedUser)}
        onClose={() => setSelectedUser(null)}
      />
    </section>
  );
};
