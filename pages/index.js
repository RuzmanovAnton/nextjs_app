import Layout from "../layouts/Layout";
import { titles } from "../helpers/utils";

export default function Index() {
  return (
    <Layout title={titles.homepage}>
      <h1>Index Page</h1>
    </Layout>
  );
}
