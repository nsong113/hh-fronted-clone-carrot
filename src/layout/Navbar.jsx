import React from 'react';
import * as St from './style';

const Navbar = () => {
  return (
    <St.NavbarUl>
      <St.NavbarLi>중고거래</St.NavbarLi>
      <St.NavbarLi>등록하기</St.NavbarLi>
      <St.NavbarLi>채팅하기</St.NavbarLi>
      <St.NavbarLi>마이페이지</St.NavbarLi>
    </St.NavbarUl>
  );
};

export default Navbar;
