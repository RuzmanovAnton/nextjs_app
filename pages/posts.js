import Layout from "../layouts/Layout";
import { useEffect, useState } from "react";
import { apiUrl } from "../helpers/utils";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await fetch(apiUrl);
      const json = await response.json();
      setPosts(json);
    }
    load();
  }, []);

  return (
    <Layout>
      <h1>Posts without SSR</h1>
      <pre>{JSON.stringify(posts, null, 4)}</pre>
    </Layout>
  );
}
