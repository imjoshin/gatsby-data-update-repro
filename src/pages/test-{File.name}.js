import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"

const TestPage = (props) => {
  const nav = props.data.allSitePage.nodes.map(n => {
    return (
      <div><Link to={n.path}>{n.path}</Link></div>
    )
  })

  return (
    <Layout>
      <pre>
        {JSON.stringify(props.data.file, null, 2)}
      </pre>

      {nav}
    </Layout>
  )
}


export const query = graphql`
  query($id: String) {
    file(id: { eq: $id }) {
      absolutePath
    }
    allSitePage {
      nodes {
        path
      }
    }
  }
`

export default TestPage
