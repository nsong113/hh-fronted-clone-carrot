import React from 'react'
import * as St from '../style';
import Carousel from "react-material-ui-carousel";


const MainCarousel = () => {
  const MainCarouselArr = [
    {
      id: 1,
      url: "/assets/hDaangnMainImg1.png",
    },
    {
      id: 2,
      url: "/assets/hDaangnMainImg2.png",
    },
    {
      id: 3,
      url: "/assets/hDaangnMainImg3.png",
    },
    {
      id: 4,
      url: "/assets/hDaangnMainImg4.png",
    },
    {
      id: 5,
      url: "/assets/hDaangnMainImg5.png",
    },
  ];
  return (
    <St.CarouselContainerDiv>
      {/* <Carousel cycleNavigation={true} navButtonsAlwaysVisible={true}>
          {MainCarouselArr?.map((content) => (
            <St.CarouselBoxDiv key={content.id}>
              <img src={content.url} />
            </St.CarouselBoxDiv>
          ))}
      </Carousel> */}
      엑박. 뜨는. 이유. 찾기..
      아니면. 캐러셀. 바꾸기.
      <img src="./assets/hDaangnMainImg5.png" alt="MainSlideImg"/>
    </St.CarouselContainerDiv>
  )
}

export default MainCarousel;