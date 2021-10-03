import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <h1>Chào anh Cẩm nha.</h1>
    <p>Hôm nay em chích vắc xin buổi sáng nên nộp deadline trễ nha lần sau sẽ đúng giờ ạ!</p>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.Title}</Link>
          </h2>
          <Img fixed={document.node.Image[0].localFile.childImageSharp.fixed} />
          <p>{document.node.Content}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          Title
          Content
          Image {
            localFile {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
