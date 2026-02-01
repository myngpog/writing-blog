interface PostMeta {
  id: string;
  fileName: string;
  title: string;
  desc: string;
  date: string;
  files?: string[];
}

declare module 'virtual:blog-manifest' {
  const postMetas: PostMeta[];
}
