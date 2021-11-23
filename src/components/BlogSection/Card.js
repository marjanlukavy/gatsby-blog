import React from "react"

import {
  CardContainer,
  CardThumbnail,
  ContentContainer,
  BottomContainer,
  Title,
  Date,
  AuthorName,
  Category,
} from "./BlogElements.css"

const Card = ({ center, imageSize, item }) => {
  return (
    <CardContainer center={center}>
      <CardThumbnail imageSize={imageSize}>
        <img src={item.thumbnail_image.url} alt={item.thumbnail_image.alt} />
        <Category color={item.category_color}>
          {item.category_name.text}
        </Category>
      </CardThumbnail>
      <ContentContainer>
        <Title>{item.title.text}</Title>
      </ContentContainer>
      <BottomContainer>
        <Date>{item.written_on}</Date>
        <span>|</span>
        <AuthorName>{item.author.text}</AuthorName>
      </BottomContainer>
    </CardContainer>
  )
}

export default Card
