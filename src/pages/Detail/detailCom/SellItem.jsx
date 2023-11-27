import React from 'react';
import * as St from '../style';
import { RiBearSmileFill } from 'react-icons/ri';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import useMyPageToggle from '../../../hooks/useMyPageToggle';
import { useNavigate, useParams } from 'react-router';
import { useQuery } from 'react-query';
import { getGoods } from '../../../apis/api/goods';

const SellItem = () => {
  //style
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

  //js
  const navigate = useNavigate();
  const param = useParams();
  // console.log('param', param.goodsId);
  //좋아요 토글
  const [likeToggle, onClickLikeToggleHandler] = useMyPageToggle();

  //좌, 우 페이지네이션
  const onClickPrevNavigateHandler = () => {};
  const onClickNextNavigateHandler = () => {};

  //상세제품 정보 get
  const { data: items } = useQuery('getGoods', getGoods);

  //선택한 아이템 필터링
  const foundData = items?.find(a => a.id === parseInt(param.goodsId));
  // console.log('foundData', foundData);

  return (
    <St.SellItemContainerDiv>
      <St.SellItemArrowFlex>
        <IoIosArrowBack style={arrowStyle} onClick={onClickPrevNavigateHandler} />
        <St.SellItemLikeBtn>
          {likeToggle && <FcLikePlaceholder style={likeStyle} onClick={onClickLikeToggleHandler} />}
          {!likeToggle && <FcLike style={likeStyle} onClick={onClickLikeToggleHandler} />}
          <St.SellItemStatusDiv>좋아요</St.SellItemStatusDiv>
        </St.SellItemLikeBtn>
        <IoIosArrowForward style={arrowStyle} onClick={onClickNextNavigateHandler} />
      </St.SellItemArrowFlex>
      <>
        <St.SellItemImgDiv></St.SellItemImgDiv>
        <St.SellItemInfoDiv>
          <St.SellItemUserInfoDiv>
            <St.SellItemUserNameDiv>shinny</St.SellItemUserNameDiv>
            <St.SellItemUserAddDiv>{foundData?.wishLocation}</St.SellItemUserAddDiv>
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
              <St.SellItemContentTitleH2>{foundData?.goodsTitle}</St.SellItemContentTitleH2>
              <St.SellItemModifyBox>
                <St.SellItemModify $color={'red'}>수정</St.SellItemModify>
                <St.SellItemModify $color={'#999'}>삭제</St.SellItemModify>
              </St.SellItemModifyBox>
            </St.SellItemDivFlex>
            <St.SellItemContentHourP>15시간 전</St.SellItemContentHourP>
            <St.SellItemContentPriceP>{foundData?.price}원</St.SellItemContentPriceP>
            <St.SellItemContentContentP>{foundData?.contents}</St.SellItemContentContentP>
          </St.SellItemContentInfoDiv>
          <St.SellItemLikeFlexDiv>
            <St.SellItemLikeDiv>관심 {foundData?.likeCount}</St.SellItemLikeDiv>
            <St.SellItemLikeDiv> 채팅 20</St.SellItemLikeDiv>
            <St.SellItemLikeDiv>조회 942</St.SellItemLikeDiv>
          </St.SellItemLikeFlexDiv>
        </St.SellItemContentDiv>
      </>
    </St.SellItemContainerDiv>
  );
};

export default SellItem;
