import React from "react";
import "../styles/posts.css";

export default function PostList({ posts }) {
  return (
    <section className="posts-section">
      {posts.length === 0 ? (
        <div className="post-skeleton"></div>
      ) : (
        posts.map(post => (
          <article key={post.ID} className="post-card">
            <div className="post-header">
                <h3
                    className="gradient-post-title"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                />
                {/* <div className="post-header-line"></div> */}
                <span className="post-date">
                    {new Date(post.date).toLocaleDateString()}
                </span>
            </div>

            <p
              className="post-excerpt"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
            <a href={post.URL} className="read-more">
              Read More
            </a>
          </article>
        ))
      )}
    </section>
  );
}
