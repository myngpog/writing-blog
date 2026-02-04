import { Link } from 'react-router-dom';
import { posts } from 'virtual:blog-manifest';

import Heading from './Heading';

const postsArr = Object.values(posts).sort((a, b) => {
  if (a.priority || b.priority) {
    return (b.priority ?? 0) - (a.priority ?? 0);
  }
  return new Date(b.date).valueOf() - new Date(a.date).valueOf();
});

export default function PostsPage() {
  return (
    <section className="flex flex-col gap-4">
      {postsArr.length === 0 ? (
        <h1 className="text-center m-10 text-2xl text-dark-pink">
          No posts yet!
        </h1>
      ) : (
        postsArr.map(({ id, title, desc, date }) => (
          <article
            key={id}
            className="flex flex-col border-b border-[rgba(83,64,67,0.473)]"
          >
            <div className="flex flex-row mb-6 justify-between items-center">
              <Heading className="font-medium text-2xl tracking-wide">
                {title}
              </Heading>
              <span className="text-sm text-gray-500">
                {new Date(date).toLocaleDateString(undefined, {
                  timeZone: 'UTC',
                })}
              </span>
            </div>
            <p className="text-text-light">{desc}</p>
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
