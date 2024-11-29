import { getPosts } from "../lib/dbcall";

export default async function UsersPage() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <>
      <h1>All posts by all users</h1>
      {posts.map((post) => post.title)}
    </>
  );
}
