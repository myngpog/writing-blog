import React from "react";
import Sidebar from "./Sidebar";
import PostList from "./PostList";
import usePosts from "./usePosts";
import "../theme.css";

export default function PostsPage() {
  const { posts, loading } = usePosts();

  return (
    <div className="home-container">
      {loading ? (
        <div>Loading posts...</div>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}
