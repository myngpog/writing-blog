import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/posts.css";


const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://public-api.wordpress.com/rest/v1.1/sites/pingpengpongpog.wordpress.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching post:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading post...</p>;
  }

  const formattedDate = new Date(post.date).toLocaleDateString();

  return (
    <div className="home-container">
      <div className="post-detail-container">
        <div className="post-header">
          <div className="title-and-line">
            <h3 className="about-me blog-header">{post.title}</h3>
            <hr className="line-bruh" />
          </div>
          <span className="post-date">{formattedDate}</span>
        </div>
        <div className = "post-excerpt post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default PostDetail;
