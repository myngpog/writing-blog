import { useState } from 'react';
import { Link } from 'react-router-dom';
import { postMetas } from 'virtual:blog-manifest';

import Heading from './Heading';

export default function PostsPage() {
  const [posts] = useState(() => [...postMetas].reverse());

  return (
    <section className="flex flex-col gap-4">
      {posts.length === 0 ? (
        <h1 className="text-center m-10 text-2xl text-dark-pink">
          No posts yet!
        </h1>
      ) : (
        posts.map(({ id, title, desc, date }) => (
          <article
            key={id}
            className="flex flex-col border-b border-[rgba(83,64,67,0.473)]"
          >
            <div className="flex flex-row mb-6 justify-between items-center">
              <Heading className="font-medium text-2xl tracking-wide">
                {title}
              </Heading>
              <span className="text-sm text-gray-500">
                {new Date(date).toLocaleDateString()}
              </span>
            </div>
            <p className="text-text-dark">{desc}</p>
            <Link
              to={`/posts/${id}`}
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
