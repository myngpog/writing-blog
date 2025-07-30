import { Link } from "react-router-dom";

export default function PostList({ posts }) {
  return (
    <section className="flex flex-col gap-4">
      {posts.length === 0 ? (
        <h1 className="text-center m-10 text-2xl text-dark-pink">No posts yet!</h1>
      ) : (
        posts.map((post) => (
          <article
            key={post.ID}
            className="flex flex-col border-b border-[rgba(83,64,67,0.473)]"
          >
            <div className="flex flex-row mb-6 justify-between items-center">
              <h3 className="text-dark-pink tracking-wider font-header text-2xl">{post.title}</h3>
              <span className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </span>
            </div>

            <p
              className="text-text-dark"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            ></p>

            <Link
              to={`/posts/${post.ID}`}
              className="my-2 self-end underline text-gray-500 hover:text-red-300"
            >
              Read More
            </Link>
          </article>
        ))
      )}
    </section>
  );
}
