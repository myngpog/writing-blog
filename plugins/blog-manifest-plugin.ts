import fs from 'node:fs/promises';
import path from 'node:path';

import matter from 'gray-matter';
import T, { type Static } from 'typebox';
import { Value } from 'typebox/value';
import type { Plugin } from 'vite';

const PostMatterSchema = T.Object({
  title: T.String(),
  desc: T.String(),
  date: T.String({ format: 'date' }),
  files: T.Optional(T.Array(T.String())),
});
type PostMatter = Static<typeof PostMatterSchema>;

export type PostMeta = { id: string; fileName: string } & PostMatter;

export function blogManifestPlugin(blogDir: string): Plugin {
  const pluginName = 'rollup-plugin-blog-manifest';
  const BLOG_MANIFEST_ID = 'virtual:blog-manifest';

  return {
    name: pluginName,

    resolveId(id) {
      if (id === BLOG_MANIFEST_ID) return '\0' + BLOG_MANIFEST_ID;
      return null;
    },

    async load(id) {
      if (id !== '\0' + BLOG_MANIFEST_ID) return null;

      const fullDir = `public/${blogDir}`;

      const entryDirs = await fs.readdir(fullDir, { withFileTypes: true });

      const postMetas: Promise<PostMeta>[] = entryDirs.map(async (entryDir) => {
        // Post file is either /public/{postId}/{postId}.md or /public/{postId}.md
        const { postId, postPath } = (() => {
          if (entryDir.isDirectory()) {
            return {
              postId: entryDir.name,
              postPath: path.join(
                fullDir,
                entryDir.name,
                `${entryDir.name}.md`
              ),
            };
          }
          return {
            postId: entryDir.name.slice(0, entryDir.name.length - 3),
            postPath: path.join(fullDir, entryDir.name),
          };
        })();

        const { data } = matter(
          await fs.readFile(postPath).catch((err: unknown) => {
            console.error(
              `[${pluginName}] Expected markdown file at ${postPath}`,
              {
                err,
              }
            );
            process.exit(1);
          })
        );

        try {
          const matter = Value.Parse(PostMatterSchema, data);

          return {
            ...matter,
            id: postId,
            fileName: '/' + path.relative('public', postPath),
          };
        } catch (err) {
          console.error(`[${pluginName}] Invalid frontmatter in ${postPath}`, {
            err,
          });
          process.exit(1);
        }
      });

      const pM = await Promise.all(postMetas);
      pM.sort((a, b) => a.id.localeCompare(b.id));

      return `export const postMetas = ${JSON.stringify(pM)};`;
    },
  };
}
