import { styled } from 'styled-components';

export const GoodsContainerDiv = styled.div`
  max-width: 1200px;
  margin: 150px auto 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 200px;
  border-bottom: 1px solid #ddd;
`;

export const GoodsTitleP = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto 30px;
`

export const InputConfirmdiv = styled.div`
  width: 80%;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`

export const InputBackSpan = styled.span`
  cursor: pointer;
  padding: 10px 18px;
`

export const InputCompleteSpan = styled.span`
  cursor: pointer;
  padding: 10px 18px;
  font-weight: bold;
  color: var(--main-color);
`

export const InputImgLabel = styled.label`
  display: block;
  padding: 10px 20px 16px;
  margin: 20px;
  background-color: white;
  border: 1px solid #ddd;
`

export const InputImg = styled.img`
  width: 60px;
  display: block;
  margin: 2px auto;
`

export const InputImgP = styled.p`
  font-size: 12px;
  color: #bbb;
`

export const InputGoodsTitle = styled.input`
  width: 60%;
  padding: 8px;
  border: none;
  border-top: 1px solid #ddd;
`

export const InputGoodsPrice = styled.input`
  width: 60%;
  padding: 8px;
  border: none;
  border-top: 1px solid #ddd;
`

export const InputGoodsContents = styled.textarea`
  width: 60%;
  height: 300px;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  resize: none;
`

export const InputLocationLabel = styled.label`
  padding: 20px 10px;
`

export const SelectionFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const InputSelectContainer = styled.div`
  height: 30px;
  background-color: transparent;
  outline: none;
`