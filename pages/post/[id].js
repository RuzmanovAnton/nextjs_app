import { useRouter } from "next/router";
import Layout from "../../layouts/Layout";

export default function Post() {
  const router = useRouter();
  console.log(router);
  return (
    <Layout>
      <h1>POST {router.query.id}</h1>
    </Layout>
  );
}
