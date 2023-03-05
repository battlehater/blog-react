import React, { useCallback, useEffect, useState } from "react";
import "./Blog.css";
import apiService from "../../services/apiService";
import { Post } from "../Post";
import { UserModal } from "../UserModal";

export const Blog = (props) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

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
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const getUserById = useCallback(
    (userId) => {
      return users.find((user) => user.id === userId);
    },
    [users]
  );

  return (
    <section className="blog">
      <h1 className="blog-title">Blog</h1>
      <div className="blog-posts">
        {posts.map((post) => {
          return <Post post={post} user={getUserById(post.userId)} />;
        })}
      </div>
      <UserModal />
    </section>
  );
};
