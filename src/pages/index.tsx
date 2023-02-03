import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import "../styles/home.scss";
import BackgroundVideo from "../assets/videos/Background Video.mp4";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="home-hero">
        <div className="video-container">
          <video loop={true} controls={false} autoPlay={true} muted={true}>
            <source src={BackgroundVideo} type="video/mp4" />
          </video>
        </div>
        <div className="page-section">
          <div className="home-title-text-container">
            <div className="home-title-heading">Blues with a bite</div>
            <div className="home-title-subheading">
              The band was formed as a result of their love of blues rock and a
              desire to get these songs back out there and heard.
            </div>
          </div>
          {/* <ExpandMore className="home-title-expand"></ExpandMore> */}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
