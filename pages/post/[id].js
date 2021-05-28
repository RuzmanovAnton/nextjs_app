import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../layouts/Layout";
import Link from "next/link";

function Post({ serverPost }) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `http://localhost:4200/posts/${router.query.id}`
      );
      const data = await response.json();
      setPost(data);
    }
    if (!post) {
      load();
    }
  }, []);

  if (!post) {
    return <Layout>...Loading</Layout>;
  }
  return (
    <Layout>
      <div>
        <div>{post.title}</div>
        <hr />
        <div>{post.content}</div>
      </div>
      <Link href={"/posts-ssr"}>
        <a>Back</a>
      </Link>
    </Layout>
  );
}

Post.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return { serverPost: null };
  }
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const serverPost = await response.json();
  return { serverPost };
};

export default Post;
