import React from 'react';
import * as St from '../style';
import { getGoods } from '../../../apis/api/goods';
import { useQuery } from 'react-query';

const SellList = () => {
  const { data: items, isSuccess } = useQuery('getGoods', getGoods);
  return (
    <St.SellListContainerDiv>
      <St.SellListAllP>당근 인기중고</St.SellListAllP>
      <St.SellListItemsBoxDiv>
        {isSuccess &&
          items.map(i => {
            return (
              <St.SellListItem key={i.id}>
                <div>
                  <St.SellListImgDiv></St.SellListImgDiv>
                  <St.SellListTitleH4>{i.goodsTitle}</St.SellListTitleH4>
                  <St.SellListPriceP>{i.price}원</St.SellListPriceP>
                  <St.SellListAddressP>{i.wishLocation}</St.SellListAddressP>
                  <St.SellListFlexDiv>
                    <St.SellListLikeDiv>관심 {i.likeCount}</St.SellListLikeDiv>
                    <St.SellListLikeDiv>채팅 3</St.SellListLikeDiv>
                  </St.SellListFlexDiv>
                </div>
              </St.SellListItem>
            );
          })}
      </St.SellListItemsBoxDiv>
    </St.SellListContainerDiv>
  );
};

export default SellList;
