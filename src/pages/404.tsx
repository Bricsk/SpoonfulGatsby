import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>
        <h2>404</h2>
        <p>Sorry, that page doesn't exsist</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
