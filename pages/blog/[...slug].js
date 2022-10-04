import { useRouter } from "next/router";
function BlogPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default BlogPage;
