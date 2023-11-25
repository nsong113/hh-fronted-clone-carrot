import React from 'react'
import * as St from '../style';
import { useQuery } from 'react-query';
import { getGoods } from '../../../apis/api/goods';
import { useNavigate } from 'react-router-dom';


const GoodsList = () => {
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("Goods", getGoods);
  if (isLoading) return <div>상품 목록 로딩중</div>;
  if (isError) return <div>상품 목록을 불러오는데 에러가 발생</div>;

  // [상세보기]를 선택하는 경우 이동하는 함수
  const DetailLinkHandler = () => {
    navigate(`/detail/${data.goodsId}`);
  };

  return (
    <St.GoodsContainerDiv>
      <St.GoodsMainH2>중고거래 인기매물</St.GoodsMainH2>
      <St.LocatonBoxP>
        <St.LocatonBtn>지역을 선택하세요 </St.LocatonBtn>
        <St.LocatonBtn>동네를 선택하세요 </St.LocatonBtn>
      </St.LocatonBoxP>
      <St.GoodsListDiv>
        {data?.map((item) => {
            return (
              <St.GoodsBoxDiv key={item.goodsId} onClick={DetailLinkHandler}>
                <St.GoodsImgDiv>상품이미지<img src={item.goodsImg}/></St.GoodsImgDiv>
                <h3>{item.goodsTitle}</h3>
                <St.GoodsPriceP>{item.price}원</St.GoodsPriceP>
                <St.GoodsLocationP>{item.wishLocation}</St.GoodsLocationP>
                <St.GoodsLikeP>관심 {item.likeCount}</St.GoodsLikeP>
              </St.GoodsBoxDiv>
              );
          })}</St.GoodsListDiv>
    </St.GoodsContainerDiv>
  )
}

export default GoodsList