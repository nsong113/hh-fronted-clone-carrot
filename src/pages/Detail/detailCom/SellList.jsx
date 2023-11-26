import React from 'react';
import * as St from '../style';

const SellList = () => {
  return (
    <St.SellListContainerDiv>
      <St.SellListAllP>당근 인기중고</St.SellListAllP>
      <St.SellListItemsBoxDiv>
        <St.SellListItem>
          <div>
            <St.SellListImgDiv></St.SellListImgDiv>
            <St.SellListTitleH4>오리털 정장 패딩</St.SellListTitleH4>
            <St.SellListPriceP>10,000원</St.SellListPriceP>
            <St.SellListAddressP>서울 서대문구 북아현동</St.SellListAddressP>
            <St.SellListFlexDiv>
              <St.SellListLikeDiv>관심 5</St.SellListLikeDiv>
              <St.SellListLikeDiv>채팅 3</St.SellListLikeDiv>
            </St.SellListFlexDiv>
          </div>
        </St.SellListItem>
      </St.SellListItemsBoxDiv>
    </St.SellListContainerDiv>
  );
};

export default SellList;
