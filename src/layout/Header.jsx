import React from 'react';
import Navbar from './Navbar';
import * as St from './style';
import { useNavigate } from 'react-router';
import useInputValue from '../hooks/useInputValue';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from '../redux/modules/search';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //input 상태관리
  const [searchInput, searchInputValueHandler] = useInputValue();

  //홈버튼 클릭
  const onClickGoHomeHandler = () => {
    navigate('/');
  };

  //검색
  // const input = useSelector(state => state.search.input);
  //input값을 RTK에 보내기
  const onClickSearchHandler = () => {
    dispatch(setInputValue(searchInput));
    // console.log('searchInput', searchInput);
  };

  //로그아웃
  const onClickLogoutHandler = () => {};

  return (
    <St.HeaderContainer>
      <St.HeaderBox>
        <St.HeaderLogo onClick={onClickGoHomeHandler}></St.HeaderLogo>
        <Navbar />
        <St.HeaderSearch>
          <input
            type="text"
            placeholder="물품이나 동네를 검색해보세요."
            value={searchInput}
            onChange={searchInputValueHandler}
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
          <St.HeaderSearchBtn onClick={onClickSearchHandler}>검색!</St.HeaderSearchBtn>
        </St.HeaderSearch>
        <St.HeaderLogoutBtn onClick={onClickLogoutHandler}>로그아웃</St.HeaderLogoutBtn>
      </St.HeaderBox>
    </St.HeaderContainer>
  );
};

export default Header;
