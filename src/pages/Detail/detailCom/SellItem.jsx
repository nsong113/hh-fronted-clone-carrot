import React from 'react';
import { RiBearSmileFill } from 'react-icons/ri';
import * as St from '../style';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SellItem = () => {
  const likeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: '30px',
  };
  const arrowStyle = {
    fontSize: '60px',
    cursor: 'pointer',
  };
  return (
    <St.SellItemContainerDiv>
      <St.SellItemArrowFlex>
        <IoIosArrowBack style={arrowStyle} />

        <St.SellItemLikeBtn>
          <FcLikePlaceholder style={likeStyle} />
          <FcLike style={likeStyle} />
          <St.SellItemStatusDiv>판매중</St.SellItemStatusDiv>
        </St.SellItemLikeBtn>
        <IoIosArrowForward style={arrowStyle} />
      </St.SellItemArrowFlex>
      <St.SellItemImgDiv></St.SellItemImgDiv>
      <St.SellItemInfoDiv>
        <St.SellItemUserInfoDiv>
          <St.SellItemUserNameDiv>shinny</St.SellItemUserNameDiv>
          <St.SellItemUserAddDiv>시흥시 정왕2동</St.SellItemUserAddDiv>
        </St.SellItemUserInfoDiv>

        <St.SellItemTempDiv>
          <St.SellItemTempFlex>
            <div className="SellItemTempNumDiv">
              <St.SellItemTempNumP>36.7 ℃</St.SellItemTempNumP>
              <St.SellItemTempBarDiv>
                <St.SellItemTempGreyDiv></St.SellItemTempGreyDiv>
                <St.SellItemBlueDiv></St.SellItemBlueDiv>
              </St.SellItemTempBarDiv>
            </div>

            <div className="SellItemTempFaceDiv">
              <RiBearSmileFill style={{ fontSize: '30px', color: '#1561a9' }} />
            </div>
          </St.SellItemTempFlex>
          <St.SellItemTempFaceDiv>매너온도</St.SellItemTempFaceDiv>
        </St.SellItemTempDiv>
      </St.SellItemInfoDiv>
      <St.SellItemContentDiv>
        <St.SellItemContentInfoDiv>
          <St.SellItemDivFlex>
            <St.SellItemContentTitleH2>삼립호빵 사가세요!</St.SellItemContentTitleH2>
            <St.SellItemModifyBox>
              <St.SellItemModify $color={'red'}>수정</St.SellItemModify>
              <St.SellItemModify $color={'#999'}>삭제</St.SellItemModify>
            </St.SellItemModifyBox>
          </St.SellItemDivFlex>
          <St.SellItemContentHourP>15시간 전</St.SellItemContentHourP>
          <St.SellItemContentPriceP>1000원</St.SellItemContentPriceP>
          <St.SellItemContentContentP>
            개당 천원입니다asdfsdfdsafsafdsfadfesfdfasf.개당 천원입니다asdfsdfdsafsafdsfadfesfdfasf.개당
            천원입니다asdfsdfdsafsafdsfadfesfdfasf.개당 천원입니다asdfsdfdsafsafdsfadfesfdfasf.개당
            천원입니다asdfsdfdsafsafdsfadfesfdfasf.개당 천원입니다asdfsdfdsafsafdsfadfesfdfasf.개당
            천원입니다asdfsdfdsafsafdsfadfesfdfasf.개당 천원입니다asdfsdfdsafsafdsfadfesfdfasf.개당
            천원입니다asdfsdfdsafsafdsfadfesfdfasf.개당 천원입니다asdfsdfdsafsafdsfadfesfdfasf.
          </St.SellItemContentContentP>
        </St.SellItemContentInfoDiv>
        <St.SellItemLikeFlexDiv>
          <St.SellItemLikeDiv>관심 8</St.SellItemLikeDiv>
          <St.SellItemLikeDiv> 채팅 20</St.SellItemLikeDiv>
          <St.SellItemLikeDiv>조회 942</St.SellItemLikeDiv>
        </St.SellItemLikeFlexDiv>
      </St.SellItemContentDiv>
    </St.SellItemContainerDiv>
  );
};

export default SellItem;
