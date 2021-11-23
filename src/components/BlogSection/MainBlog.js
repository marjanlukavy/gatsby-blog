import React from "react"
import {
  CardContainer,
  CardThumbnail,
  BottomContainer,
  Date,
  AuthorName,
  Category,
  BlogDetails,
  CenteredContent,
  Description,
  ContentTitle,
} from "./BlogElements.css"

const MainBlog = ({ center, imageSize, item, position }) => {
  return (
    <CardContainer center={center}>
      <CardThumbnail imageSize={imageSize}>
        <img src={item.thumbnail_image.url} alt={item.thumbnail_image.alt} />

        <BlogDetails>
          <Category color={item.category_color} position={position}>
            {item.category_name.text}
          </Category>
          <BottomContainer>
            <Date>{item.written_on}</Date>
            <span>|</span>
            <AuthorName>{item.author.text}</AuthorName>
          </BottomContainer>
        </BlogDetails>
        <CenteredContent>
          <ContentTitle>{item.title.text}</ContentTitle>
          <Description>{item.description.text}</Description>
        </CenteredContent>
      </CardThumbnail>
    </CardContainer>
  )
}

export default MainBlog
