import { styled } from 'styled-components';

export const CarouselContainerDiv = styled.div`
  margin: 120px auto 0;
`

export const CarouselBoxDiv = styled.div`
  width: 100%;
  height: 400px;
`

export const GoodsContainerDiv = styled.div`
  max-width: 1280px;
  margin: 150px auto 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const GoodsMainH2 = styled.h2`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 60px;
`

export const LocatonBoxP = styled.p`
  width: 100%;
  display:flex;
  justify-content: flex-end;
  gap: 10px;
`
export const LocatonBtn = styled.button`
  padding: 6px 14px;
  border: 1.8px solid #eee;
  border-radius: 4px;
  background-color: white;
  &:hover {
    border-color: #bbb;
  }
`

export const GoodsListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 6%;
  row-gap: 26px;
`

export const GoodsBoxDiv = styled.div`
  cursor: pointer;
  width: 20.5%;
  margin: 30px 0; 
  display:flex;
  flex-direction: column;
  gap: 10px;
`
export const GoodsImgDiv = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 14px;
  background-color: #bbb;
`
export const GoodsPriceP = styled.p`
  font-weight: bold;
`

export const GoodsLocationP = styled.p`
  font-size: 14px;
`

export const GoodsLikeP = styled.p`
  font-size: 14px;
  color: #bbb;
`


