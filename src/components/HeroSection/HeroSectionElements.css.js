import styled, { css } from "styled-components/macro"
import { FiArrowRight } from "react-icons/fi"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { GatsbyImage } from "gatsby-plugin-image"

export const HeroSection = styled.section`
  height: calc(100vh - 70px);
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`
export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`
export const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
`
export const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100vh;
    bottom: 0;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`
export const HeroImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`
export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1200px;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
`
export const Arrow = styled(FiArrowRight)`
  margin-left: 0.5rem;
`
export const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`
export const arrowButtons = css`
  width: 58px;
  height: 58px;
  color: #000;
  cursor: pointer;
  background-color: #fff;
  padding: 10px;
  /* margin-right: 1rem; */
  user-select: none;
  z-index: 100;
  @media (max-width: 525px) {
    background-color: transparent;
    color: white;
  }
`
export const PrevArrow = styled(IoIosArrowBack)`
  ${arrowButtons}
`
export const NextArrow = styled(IoIosArrowForward)`
  ${arrowButtons}
`
