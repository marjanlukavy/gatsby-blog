import React from "react"
import {
  NewsLetterContainer,
  NewsLetterContent,
  InputContainer,
} from "./NewsLetterElements.css"
const NewsLetterSection = () => {
  return (
    <NewsLetterContainer>
      <NewsLetterContent>
        <h1>Newsletter</h1>
        <p>Donec elementum dui semper, pretium dui quis, pretium nisl.</p>
        <InputContainer>
          <input type="text" />
          <button>Sign up</button>
        </InputContainer>
      </NewsLetterContent>
    </NewsLetterContainer>
  )
}

export default NewsLetterSection
