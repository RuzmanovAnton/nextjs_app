import Layout from "../layouts/Layout";
import { titles } from "../helpers/utils";

export default function Index() {
  return (
    <Layout title={titles.homepage}>
      <div>Index Page</div>
    </Layout>
  );
}
