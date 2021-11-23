import React, { useState, useCallback } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  HeroContent,
  HeroImage,
  HeroSection,
  HeroSlide,
  HeroSlider,
  HeroWrapper,
  PrevArrow,
  NextArrow,
} from "./HeroSectionElements.css"

import {
  BlogDetails,
  Category,
  BottomContainer,
  AuthorName,
  CenteredContent,
  ContentTitle,
  Date,
} from "../BlogSection/BlogElements.css"

const Hero = ({ posts }) => {
  const [current, setCurrent] = useState(0)
  const length = posts.length

  const nexSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }, [current])

  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }, [current])

  if (!Array.isArray(posts) || posts.length <= 0) return null
  return (
    <HeroSection>
      <HeroWrapper>
        {posts.map(({ node }, index) => {
          return (
            <HeroSlide key={node.id}>
              {index === current && (
                <HeroSlider>
                  <HeroImage
                    image={getImage(node.frontmatter.image01)}
                    alt={node.frontmatter.slug}
                  />
                  <PrevArrow onClick={prevSlide} />
                  <HeroContent>
                    <BlogDetails>
                      <Category color="red" position={true} leftZero={true}>
                        {node.frontmatter.category}
                      </Category>
                      <BottomContainer>
                        <Date>{node.frontmatter.written_on}</Date>
                        <span>|</span>
                        <AuthorName>{node.frontmatter.written_by}</AuthorName>
                      </BottomContainer>
                    </BlogDetails>
                    <CenteredContent>
                      <GatsbyImage
                        image={getImage(node.frontmatter.thumbnail)}
                        alt="2"
                      />
                      <ContentTitle>{node.frontmatter.title}</ContentTitle>
                    </CenteredContent>
                  </HeroContent>
                  <NextArrow onClick={nexSlide} />
                </HeroSlider>
              )}
            </HeroSlide>
          )
        })}
      </HeroWrapper>
    </HeroSection>
  )
}

export default Hero
