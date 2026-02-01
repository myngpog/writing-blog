// @ts-check
import { useEffect, useState } from 'react';
import Markdown, { MarkdownAsync } from 'react-markdown';
import { useParams } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import blogMetas from '../lib/blog_meta';
import Heading from './Heading';

export default function PostDetail() {
  const { id } = useParams();
  const idPadded = id?.padStart(4, '0');

  const meta = blogMetas[Number(id)];

  const filePaths =
    meta.files && idPadded
      ? generateFilePaths(idPadded, meta.files)
      : undefined;

  const [markdown, setMarkdown] = useState('');
  useEffect(
    function fetchMarkdown() {
      if (!idPadded || !meta.markdown) return;
      fetch(getMarkdownPath(idPadded, meta.markdown))
        .then((f) => f.text())
        .then((md) => setMarkdown(md));
    },
    [idPadded, meta.markdown]
  );

  const date = new Date(meta.date).toLocaleDateString();

  if (!id) return null;

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
            <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
              {markdown}
            </Markdown>
          </div>
        )}

        {filePaths && (
          <div className="md:h-[65vh] overflow-auto">
            {filePaths.map((filePath) => (
              <img src={filePath} alt="Post page" loading="lazy" />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

/**
 * @param {string} id
 * @param {string} name
 * @returns {string}
 */
function getMarkdownPath(id, name) {
  return `/entries/${id}/${name}`;
}

/**
 * @param {string} id
 * @param {string[]} names
 * @returns {string[]}
 */
function generateFilePaths(id, names) {
  return names.map((name) => `/entries/${id}/IMG_${name}.jpg`);
}
