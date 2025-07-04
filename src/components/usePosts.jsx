import { useState, useEffect } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://public-api.wordpress.com/rest/v1.1/sites/pingpengpongpog.wordpress.com/posts/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data.posts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  return { posts, loading };
};

export default usePosts;
