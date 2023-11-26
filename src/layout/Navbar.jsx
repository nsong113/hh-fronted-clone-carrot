import React from 'react';
import * as St from './style';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();
  const onClickGotoSellHandler = () => {
    navigate('/');
  };
  const onClickGotoWriteHandler = () => {
    navigate('/write');
  };
  const onClickGotoMypageHandler = () => {
    navigate('/mypage');
  };

  return (
    <St.NavbarUl>
      <St.NavbarLi onClick={onClickGotoSellHandler}>중고거래</St.NavbarLi>
      <St.NavbarLi onClick={onClickGotoWriteHandler}>등록하기</St.NavbarLi>
      <St.NavbarLi>채팅하기</St.NavbarLi>
      <St.NavbarLi onClick={onClickGotoMypageHandler}>마이페이지</St.NavbarLi>
    </St.NavbarUl>
  );
};

export default Navbar;
