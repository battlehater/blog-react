import React, { useEffect, useState } from "react";
import "./Blog.css";
import apiService from "../../services/apiService";
import { Post } from "../Post/Post";

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

  return (
    <section className="blog">
      <h1 className="blog-title">Blog</h1>
      <div className="blog-posts">
        {posts.map((post) => {
          return <Post post={post} user={} />;
        })}
      </div>
    </section>
  );
};
