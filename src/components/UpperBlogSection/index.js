import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Card from "../BlogSection/Card"
import { Container, UpperBlogContainer } from "../BlogSection/BlogElements.css"

const UpperBlogSection = () => {
  const { upperpost } = useStaticQuery(graphql`
    query UpperPosts {
      upperpost: allPrismicUpperPosts {
        edges {
          node {
            data {
              author {
                text
              }
              category_color
              category_name {
                text
              }
              description {
                text
              }
              thumbnail_image {
                alt
                url
              }
              title {
                text
              }
              written_on(formatString: "D MMMM YYYY")
            }
            uid
          }
        }
      }
    }
  `)

  return (
    <UpperBlogContainer>
      <Container col={2}>
        {upperpost.edges.map(({ node }) => (
          <Card item={node.data} key={node.uid} />
        ))}
      </Container>
    </UpperBlogContainer>
  )
}

export default UpperBlogSection
