import Head from "next/head";
import Layout from "../layouts/Layout";
import { titles } from "../helpers/utils";
// import { useEffect, useState } from "react";
import { apiUrl } from "../helpers/utils";
import Link from "next/link";

function PostsSsr({ posts }) {
  return (
    <Layout title={titles.ssrPosts}>
      <Head>
        <meta name="keywords" content="React,SSR,NextJS" />
        <meta name="description" content="Description for React SSR page" />
      </Head>
      <h1>Posts page with SSR</h1>
      {posts.map((post) => (
        <Link key={post.id} href={`/post/[id]`} as={`/post/${post.id}`}>
          <a>
            <div>{post.title}</div>
          </a>
        </Link>
      ))}
      <pre>{JSON.stringify(posts, null, 4)}</pre>
    </Layout>
  );
}

PostsSsr.getInitialProps = async () => {
  const response = await fetch(apiUrl);
  const posts = await response.json();
  return { posts };
};

export default PostsSsr;
