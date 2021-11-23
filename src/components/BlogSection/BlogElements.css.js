import styled, { css } from "styled-components"

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px;

  padding: 46px 10px 75px 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  ${props =>
    props.col === 2 &&
    css`
      grid-template-columns: repeat(2, minmax(380px, 1fr));
      padding: 46px 10px 40px 10px;

      @media (max-width: 840px) {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      }
    `};

  grid-auto-rows: auto;
  grid-gap: 47px 29px;
`

export const UpperBlogContainer = styled.div`
  width: 100%;
  background-color: #f6f6f6;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${props =>
    props.center &&
    css`
      grid-column-start: 1;
      grid-column-end: -1;
    `};
`

export const CardThumbnail = styled.div`
  position: relative;

  img {
    width: 100%;
    ${props =>
      props.imageSize &&
      css`
        height: 400px;
      `}

    object-fit: cover;
  }
`

export const ContentContainer = styled.div``

export const CenteredContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  transform: translate(-50%, -50%);
  width: 100%;
  left: 50%;
  text-align: center;
`
export const ContentTitle = styled.div`
  color: white;
  font-size: 3em;
  font-family: "PT Serif", serif;
  @media (max-width: 525px) {
    font-size: 2em;
  }
`
export const Description = styled.div`
  font-family: "PT Serif", serif;
  font-size: 18px;
  font-weight: 400;
`
export const Title = styled.h2`
  font-family: "PT Serif", serif;
  font-weight: 400;
  color: #000;
  font-size: 18px;
  margin: 17px 0 26px 0;
`
export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  span {
    color: #b0b0b0;
    margin: 0 10px;
  }
`
export const Date = styled.div`
  color: #b0b0b0;
  font-size: 14px;
`
export const AuthorName = styled.div`
  color: #1a54e7;
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;
`
export const Category = styled.div`
  position: absolute;
  bottom: 22px;
  left: 0;
  ${props =>
    props.position &&
    css`
      position: relative;
      bottom: 0;
    `}
  color: #fff;
  padding: 9px 19px;
  font-size: 18px;
  font-weight: bold;
  background-color: ${props => props.color};
`
export const BlogDetails = styled.div`
  position: absolute;
  bottom: 22px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
