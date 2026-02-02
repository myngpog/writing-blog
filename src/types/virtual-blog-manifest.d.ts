interface PostMeta {
  id: string;
  fileName: string;
  title: string;
  desc: string;
  date: string;
  files?: string[];
  priority: number;
}

declare module 'virtual:blog-manifest' {
  const posts: Record<string, PostMeta>;
}
