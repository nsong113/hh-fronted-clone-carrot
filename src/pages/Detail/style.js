import { styled } from 'styled-components';

/////sell Item style
export const SellItemContainerDiv = styled.div`
  width: 690px;
  margin: 0 auto;
  height: auto;
`;

export const SellItemArrowFlex = styled.div`
  width: 100%;
  height: 80px;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333;
`;

export const SellItemLikeBtn = styled.div`
  width: 100px;
  height: 50px;
  position: relative;
  transform: translate(30px, -5px);
  text-align: center;
  cursor: pointer;
`;

export const SellItemStatusDiv = styled.div`
  font-weight: 400;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 14px;
  transform: translateX(-3px);
`;

export const SellItemImgDiv = styled.div`
  background-color: aqua;
  width: 100%;
  margin: 0 auto;
  height: 500px;
  border-radius: 10px;
  /* margin-top: 90px; */
`;

export const SellItemInfoDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #ddd;
`;

export const SellItemUserInfoDiv = styled.div`
  width: 65%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SellItemTempDiv = styled.div`
  width: 25%;
  height: 100%;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SellItemTempFlex = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
`;

export const SellItemTempBarDiv = styled.div`
  width: 100px;
  height: 5px;
  position: relative;
`;

export const SellItemTempGreyDiv = styled.div`
  background-color: #ddd;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2px;
`;

export const SellItemBlueDiv = styled.div`
  background-color: #1561a9;
  width: 30%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2px;
  z-index: 100;
`;

export const SellItemUserNameDiv = styled.h5`
  font-size: 14px;
  font-weight: 400;
`;

export const SellItemUserAddDiv = styled.div`
  color: #555;
  font-size: 14px;
  margin: 8px 0;
`;

export const SellItemTempNumP = styled.p`
  font-size: 16px;
  color: #1561a9;
  font-weight: 800;
  margin-bottom: 5px;
`;

export const SellItemTempFaceDiv = styled.div`
  font-size: 13px;
  color: #bbb;
  margin-top: 8px;
`;

export const SellItemContentDiv = styled.div`
  width: 100%;
  min-height: 230px;
  height: auto;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

export const SellItemContentInfoDiv = styled.div`
  margin-top: 40px;
`;

export const SellItemDivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SellItemContentTitleH2 = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
`;

export const SellItemModifyBox = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SellItemModify = styled.div`
  width: 40%;
  height: 20px;
  color: ${props => props.$color};
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SellItemContentHourP = styled.p`
  margin-top: 4px;
  font-size: 13px;
  line-height: 1.46;
  color: #868e96;
`;

export const SellItemContentPriceP = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 4px;
`;

export const SellItemContentContentP = styled.p`
  margin-bottom: 16px;
  margin-top: 18px;
`;

export const SellItemLikeFlexDiv = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SellItemLikeDiv = styled.p`
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: #868e96;
`;

//sell list style
export const SellListContainerDiv = styled.div`
  width: 690px;
  margin: 40px auto;
  height: auto;
`;

export const SellListAllP = styled.p`
  font-size: 18px;
  text-align: left;
  line-height: 1.47;
  font-weight: 600;
  padding-bottom: 0;
  margin-bottom: 30px;
`;

export const SellListItemsBoxDiv = styled.div`
  width: 100%;
  min-height: 350px;
  height: auto;
  cursor: pointer;
`;

export const SellListItem = styled.div`
  width: calc(33% - 16px);
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  margin-bottom: 56px;
`;

export const SellListImgDiv = styled.div`
  background-color: beige;
  border-radius: 10px;
  width: 210px;
  height: 210px;
  margin-bottom: 20px;
`;

export const SellListTitleH4 = styled.h4`
  font-size: 16px;
  color: #212529;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 8px;
  font-weight: normal;
`;

export const SellListPriceP = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const SellListAddressP = styled.p`
  font-size: 13px;
  color: #212529;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 8px;
  line-height: 1.5;
`;

export const SellListFlexDiv = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SellListLikeDiv = styled.div`
  color: #868e96;
  font-size: 13px;
`;
