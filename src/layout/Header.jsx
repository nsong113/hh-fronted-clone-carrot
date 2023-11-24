import React from 'react';
import Navbar from './Navbar';
import * as St from './style';

const Header = () => {
  return (
    <St.HeaderContainer>
      <St.HeaderBox>
        <St.HeaderLogo></St.HeaderLogo>
        <Navbar />
        <St.HeaderSearch>
          <input
            type="text"
            placeholder="물품이나 동네를 검색해보세요."
            style={{
              height: '35px',
              width: '300px',
              borderRadius: '5px',
              border: 'none',
              fontSize: '13px',
              backgroundColor: '#eee',
            }}
          ></input>{' '}
          &nbsp;&nbsp;
          <St.HeaderSearchBtn>검색!</St.HeaderSearchBtn>
        </St.HeaderSearch>
        <St.HeaderLogoutBtn>로그아웃</St.HeaderLogoutBtn>
      </St.HeaderBox>
    </St.HeaderContainer>
  );
};

export default Header;
