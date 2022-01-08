import Layout from "../layout";
import Showcase from "./showcase";
import Updates from "./updates";

export default function Discover() {
  return (
    <Layout>
      <div className="pt-10">
        <Updates />
        <Showcase />
      </div>
    </Layout>
  );
}
