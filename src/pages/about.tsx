import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div >
        About
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>About Us</title>;