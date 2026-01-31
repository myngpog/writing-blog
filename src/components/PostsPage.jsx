import { Link } from "react-router-dom";
import Heading from "./Heading";
import blogMetas from "../lib/blog_meta";

export default function PostsPage() {
  return (
    <section className="flex flex-col gap-4">
      {blogMetas.length === 0 ? (
        <h1 className="text-center m-10 text-2xl text-dark-pink">
          No posts yet!
        </h1>
      ) : (
        blogMetas.reverse().map((meta, idx) => (
          <article
            key={idx}
            className="flex flex-col border-b border-[rgba(83,64,67,0.473)]"
          >
            <div className="flex flex-row mb-6 justify-between items-center">
              <Heading className="font-medium text-2xl tracking-wide">
                {meta.title}
              </Heading>
              <span className="text-sm text-gray-500">
                {new Date(meta.date).toLocaleDateString()}
              </span>
            </div>
            <p className="text-text-dark">{meta.desc}</p>
            <Link
              to={`/posts/${idx}`}
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
