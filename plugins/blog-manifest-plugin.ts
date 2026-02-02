import fs from 'node:fs/promises';
import path from 'node:path';

import matter from 'gray-matter';
import type { Plugin } from 'vite';
import z from 'zod';

const PostMatterSchema = z.object({
  title: z.string(),
  desc: z.string(),
  date: z.coerce.date(),
  files: z.string().array().optional(),
  priority: z.number().optional(),
});
type PostMatter = z.infer<typeof PostMatterSchema>;

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

      const promises: Promise<PostMeta>[] = entryDirs.map(async (entryDir) => {
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
            postId: entryDir.name.slice(0, entryDir.name.length - 3), // trim '.md'
            postPath: path.join(fullDir, entryDir.name),
          };
        })();

        const { data } = matter(
          await fs.readFile(postPath).catch((err: unknown) => {
            console.error(
              `[${pluginName}] Expected markdown file at ${postPath}`
            );
            throw err;
          })
        );

        try {
          const matter = PostMatterSchema.parse(data);

          return {
            ...matter,
            id: postId,
            fileName: '/' + path.relative('public', postPath),
          };
        } catch (err) {
          console.error(`[${pluginName}] Invalid frontmatter in ${postPath}`);
          throw err;
        }
      });

      const metas = await Promise.all(promises);

      const metasObj = metas.reduce<Record<string, PostMeta>>((obj, meta) => {
        obj[meta.id] = meta;
        return obj;
      }, {});

      return `export const posts = ${JSON.stringify(metasObj)};`;
    },
  };
}
