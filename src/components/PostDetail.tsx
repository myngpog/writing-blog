import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import { postMetas } from 'virtual:blog-manifest';

import Heading from './Heading';

export default function PostDetail() {
  const { id: idParam } = useParams();

  const meta = postMetas[Number(idParam)];

  const [markdown, setMarkdown] = useState('');
  useEffect(
    function fetchMarkdown() {
      if (!meta) return;

      fetch(meta.fileName)
        .then((f) => f.text())
        .then((t) => setMarkdown(t));
    },
    [meta]
  );

  if (!meta) {
    return 'Post not found';
  }

  const blogDir = meta.fileName.substring(0, meta.fileName.lastIndexOf('/'));
  const imagePaths = (meta.files ?? []).map(
    (file) => `${blogDir}/IMG_${file}.jpg`
  );

  const date = new Date(meta.date).toLocaleDateString();

  if (!idParam) return null;

  return (
    <article className="flex flex-col flex-1">
      <div className="flex flex-row justify-between mb-8 items-center">
        <Heading className="text-2xl md:text-3xl tracking-wide font-medium">
          {meta.title}
        </Heading>
        <div className="flex-1 border-t mx-3 border-gray-300" />
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <div className="flex flex-col gap-3">
        {markdown && (
          <div className="text-text-light">
            <Markdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkFrontmatter, remarkGfm]}
            >
              {markdown}
            </Markdown>
          </div>
        )}

        {imagePaths.length > 0 && (
          <div className="md:h-[65vh] overflow-auto">
            {imagePaths.map((path) => (
              <img key={path} src={path} alt="Post page" loading="lazy" />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
