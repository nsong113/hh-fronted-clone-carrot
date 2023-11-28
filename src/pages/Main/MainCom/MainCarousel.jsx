import React from 'react';
import * as St from '../style';
import Carousel from 'react-material-ui-carousel';

const MainCarousel = () => {
  const MainCarouselArr = [
    {
      id: 1,
      url: '../hDaangnMainImg1.png',
    },
    {
      id: 2,
      url: '../hDaangnMainImg2.png',
    },
    {
      id: 3,
      url: '../hDaangnMainImg3.png',
    },
    {
      id: 4,
      url: '../hDaangnMainImg4.png',
    },
    {
      id: 5,
      url: '../hDaangnMainImg5.png',
    },
  ];

  const imgUrl = "../../../../hDaangnMainImg1.png";
  return (
    <St.CarouselContainerDiv>
      <Carousel 
        cycleNavigation={true} 
        navButtonsAlwaysVisible={true}
        navButtonsProps={{style: {backgroundColor: '#bbb',}}}
        indicatorIconButtonProps={{
          style: {
            width: '20px',
            padding: '2px',
            color: '#eee'
          }}}
        activeIndicatorIconButtonProps={{
          style: {
              color: 'var(--main-color)'
          }}}
      >
        {MainCarouselArr?.map(content => (
          <St.CarouselBoxDiv key={content.id}>
            <img src={content.url} style={{width: '100%'}}/>
          </St.CarouselBoxDiv>
        ))}
      </Carousel>
    </St.CarouselContainerDiv>
  );
};

export default MainCarousel;
