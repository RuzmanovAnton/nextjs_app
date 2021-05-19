import Head from "next/head";
import Layout from "../layouts/Layout";
import { titles } from "../helpers/utils";

export default function About() {
  return (
    <Layout title={titles.ssrPosts}>
      <Head>
        <meta name="keywords" content="React,SSR,NextJS" />
        <meta name="description" content="Description for React SSR page" />
      </Head>
      <h1>Posts page with SSR</h1>
    </Layout>
  );
}
