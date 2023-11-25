import React, { useState } from 'react';
import { IoIosChatboxes } from 'react-icons/io';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { MdSell } from 'react-icons/md';
import { TiHeartFullOutline } from 'react-icons/ti';
import * as St from '../style';
import useMyPageToggle from '../../../hooks/useMyPageToggle';

const Mypage = () => {
  const [likeToggle, onClickSeeLikeListHandler] = useMyPageToggle();
  const [SellToggle, onClickSellListHandler] = useMyPageToggle();
  const [BuyToggle, onClickBuyToggleHandler] = useMyPageToggle();
  const [ChatToggle, onClickChatToggleHandler] = useMyPageToggle();

  return (
    <St.MypageContainerDiv>
      <St.MypageUserInfo>
        {/* <div className="MypageUserImg"></div> */}
        <St.MypageUserInfoNameP> wldn 님</St.MypageUserInfoNameP>
      </St.MypageUserInfo>
      <St.MypageH2>내 게시물</St.MypageH2>

      <St.MypageList onClick={onClickSeeLikeListHandler}>
        <TiHeartFullOutline /> <St.MypageListP>관심 목록</St.MypageListP>
      </St.MypageList>
      {likeToggle ? (
        <St.MypageListBox>
          <p>관심 목록이 아직 없네요!</p>
        </St.MypageListBox>
      ) : null}

      <St.MypageList onClick={onClickSellListHandler}>
        <MdSell /> <St.MypageListP>판매 내역</St.MypageListP>
      </St.MypageList>

      {SellToggle ? (
        <St.MypageListBox>
          <p>판매 내역이 아직 없네요!</p>
        </St.MypageListBox>
      ) : null}

      <St.MypageList onClick={onClickBuyToggleHandler}>
        <RiMoneyDollarCircleFill /> <St.MypageListP>구매 내역</St.MypageListP>
      </St.MypageList>
      {BuyToggle ? (
        <St.MypageListBox>
          <p>구매 내역이 아직 없네요!</p>
        </St.MypageListBox>
      ) : null}

      <St.MypageList onClick={onClickChatToggleHandler}>
        <IoIosChatboxes /> <St.MypageListP>채팅 목록</St.MypageListP>
      </St.MypageList>
      {ChatToggle ? (
        <St.MypageListBox>
          <p>채팅 내역이 아직 없네요!</p>
        </St.MypageListBox>
      ) : null}
    </St.MypageContainerDiv>
  );
};

export default Mypage;
