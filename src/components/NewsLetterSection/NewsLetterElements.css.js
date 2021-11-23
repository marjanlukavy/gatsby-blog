import styled from "styled-components"

export const NewsLetterContainer = styled.div`
  width: 100%;
  height: 417px;
  background-color: #1a54e7;
  font-family: "PT Serif", serif;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const NewsLetterContent = styled.div`
  h1 {
    font-size: 3em;
    color: #fff;
    margin-bottom: 15px;
  }
  p {
    color: #8baeff;
    font-size: 24px;
    margin-bottom: 24px;
  }
`
export const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  input,
  button {
    border: none;
    padding: 14px 38px;
    border-radius: 30px;
    position: absolute;
    outline: none;
    font-size: 18px;
  }
  input {
    background-color: #2c6cff;
    color: #fff;
  }
  button {
    right: 125px;
    cursor: pointer;
    font-weight: 700;
    color: #1a54e7;
  }
`
