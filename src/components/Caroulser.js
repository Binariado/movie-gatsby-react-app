import React from 'react';
import Flickity from 'react-flickity-component';
import styled, { createGlobalStyle } from 'styled-components';
import { rhythm } from "../utils/typography";

const flickityOptions = {
  initialIndex: 1,
  viewFullscreen: true,
  //freeScroll: true,
  //wrapAround: true
  fullscreen: true,
  pageDots: false
}

const URL = "https://www.eloccidental.com.mx/incoming/yjlhq1-guason-2.jpg/ALTERNATES/LANDSCAPE_1140/Guason%202.jpg";


const ConteImg = styled.div`
  display: table;
  margin: 0 auto;
  
`;

const DivImg = styled.div`
  background-color: transparent;
  display: table-cell;
  height: 130px;
  vertical-align: middle;
`;

const ImgFluid = styled.img`
  height: 130px;
  //margin: ${rhythm(0.1)}
`;

const GlobalStyle = createGlobalStyle`
.carousel-cell {
  width: 66%;
  height: 200px;
  margin-right: 10px;
  background: #8C8;
  border-radius: 5px;
  counter-increment: carousel-cell;
}

.carousel.is-fullscreen .carousel-cell {
  height: 100%;
}

/* cell number */
.carousel-cell:before {
  display: block;
  text-align: center;
  content: counter(carousel-cell);
  line-height: 200px;
  font-size: 80px;
  color: white;
}
`;

export default function Carousel() {
  return (
    <>
      <GlobalStyle />
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <ImgFluid src={URL} />
        <ImgFluid src={URL} />
      </Flickity>
    </>
  )
}