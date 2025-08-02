import PostList from "./PostList";
import usePosts from "./usePosts";

export default function PostsPage() {
  const { posts, loading } = usePosts();

  return (
    <div className="flex-1">
      {loading ? <div>Loading posts...</div> : <PostList posts={posts} />}
    </div>
  );
}
