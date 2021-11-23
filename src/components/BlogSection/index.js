import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Card from "./Card"
import { Container } from "./BlogElements.css"
import MainBlog from "./MainBlog"

const BlogSection = () => {
  const { postlist } = useStaticQuery(graphql`
    query Posts {
      postlist: allPrismicPosts {
        edges {
          node {
            uid
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
          }
        }
      }
    }
  `)

  return (
    <Container>
      {postlist.edges.map(({ node }, key) => {
        if (!key) {
          return (
            <MainBlog
              center={true}
              imageSize={true}
              position={true}
              item={node.data}
              key={node.uid}
            />
          )
        } else {
          return <Card item={node.data} key={node.uid} />
        }
      })}
    </Container>
  )
}

export default BlogSection
