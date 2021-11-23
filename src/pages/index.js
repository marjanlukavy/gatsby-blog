import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/HeroSection"
import BlogSection from "../components/BlogSection"
import UpperBlogSection from "../components/UpperBlogSection"
import NewsLetterSection from "../components/NewsLetterSection"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <Layout>
        <Seo title="Home" />
        <Hero posts={posts} />
        <UpperBlogSection />
        <BlogSection />
        <UpperBlogSection />
        <NewsLetterSection />
      </Layout>
    </>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            category
            slug
            title
            written_by
            written_on
            image01 {
              childImageSharp {
                gatsbyImageData(
                  blurredOptions: { width: 100 }
                  width: 2000
                  placeholder: BLURRED
                  transformOptions: { cropFocus: CENTER }
                  aspectRatio: 1.5
                )
              }
            }
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.5
                  blurredOptions: { width: 100 }
                  width: 135
                  height: 135
                  transformOptions: { cropFocus: CENTER }
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
