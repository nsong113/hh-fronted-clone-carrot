import React, { useEffect, useState } from 'react';
import * as St from '../style';
import { useQuery } from 'react-query';
import { getGoods } from '../../../apis/api/goods';
import { useNavigate } from 'react-router-dom';
import { useSelect } from '@mui/base';
import { useSelector } from 'react-redux';

const GoodsList = () => {
  const navigate = useNavigate();

  //RTK에서 input 값 가져오기
  const input = useSelector(state => state.search.input);

  //전체 데이터 불러오기
  const { isLoading, isError, data } = useQuery('Goods', getGoods);
  if (isLoading) return <div>상품 목록 로딩중</div>;
  if (isError) return <div>상품 목록을 불러오는데 에러가 발생</div>;

  // RTK에서 가져온 input 값 필터링하기//
  // const filtered = data?.filter(item => {
  //   return item.goodsTitle.includes(input);
  // });

  const filtered = Array.isArray(data) ? data.filter(item => item.goodsTitle.includes(input)) : [];

  const DetailLinkHandler = id => {
    navigate(`/detail/${id}`);
  };

  return (
    <St.GoodsContainerDiv>
      <St.GoodsMainH2>중고거래 인기매물</St.GoodsMainH2>
      <St.LocatonBoxP>
        <St.LocatonBtn>지역을 선택하세요 </St.LocatonBtn>
        <St.LocatonBtn>동네를 선택하세요 </St.LocatonBtn>
      </St.LocatonBoxP>
      <St.GoodsListDiv>
        {input &&
          filtered?.map(item => {
            return (
              <St.GoodsBoxDiv key={item.id} onClick={() => DetailLinkHandler(item.id)}>
                <St.GoodsImgDiv>
                  <img src={item.goodsImg} />
                </St.GoodsImgDiv>
                <h3>{item.goodsTitle}</h3>
                <St.GoodsPriceP>{item.price}원</St.GoodsPriceP>
                <St.GoodsLocationP>{item.wishLocation}</St.GoodsLocationP>
                <St.GoodsLikeP>관심 {item.likeCount}</St.GoodsLikeP>
              </St.GoodsBoxDiv>
            );
          })}
        {!input &&
          data?.map(item => {
            return (
              <St.GoodsBoxDiv key={item.id} onClick={() => DetailLinkHandler(item.id)}>
                <St.GoodsImgDiv>
                  <img src={item.goodsImg} />
                </St.GoodsImgDiv>
                <h3>{item.goodsTitle}</h3>
                <St.GoodsPriceP>{item.price}원</St.GoodsPriceP>
                <St.GoodsLocationP>{item.wishLocation}</St.GoodsLocationP>
                <St.GoodsLikeP>관심 {item.likeCount}</St.GoodsLikeP>
              </St.GoodsBoxDiv>
            );
          })}
      </St.GoodsListDiv>
    </St.GoodsContainerDiv>
  );
};

export default GoodsList;
