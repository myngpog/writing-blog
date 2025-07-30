import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/pingpengpongpog.wordpress.com/posts/${id}`
    )
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
    <article className="flex flex-col flex-1">
      <div className="flex flex-row justify-between mb-8 items-center">
        <h1 className="text-4xl font-header text-dark-pink tracking-[0.2rem]">{post.title}</h1>
        <div className="flex-1 border-t mx-3 border-[#ccc]" />
        <span className="text-gray-500 text-sm">{formattedDate}</span>
      </div>
      <div
        className="text-text-light"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export default PostDetail;
