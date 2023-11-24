import { styled } from 'styled-components';
import carrotLogo from '../assets/carrot_logo.png';

//header & logo
export const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
`;

export const HeaderBox = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  width: 65px;
  height: 30px;
  background-image: url(${carrotLogo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: translateY(-3px);
`;

//navbar
export const NavbarUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLi = styled.li`
  padding: 0 25px;
  font-weight: 600;
  font-size: 17px;
  color: #555;
`;

//로그아웃 버튼
export const HeaderLogoutBtn = styled.div`
  width: 90px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-weight: 600;
  transition: 0.2s;
  &:hover {
    background-color: #eee;
  }
`;

export const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderSearchBtn = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #555;
`;

//footer
export const FooterContainer = styled.div`
  width: 100%;
  height: 680px;
  border-top: #ddd;
  font-weight: 400;
  font-size: 14px;
`;

export const FooterWrap = styled.div`
  width: 60%;
  height: 450px;
  padding: 150px;
  margin: 0 auto;
`;

export const FooterUpperPartDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: top;
  justify-content: space-between;
`;

export const FooterUpperLeftDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: top;
  justify-content: space-between;
`;

export const FooterLi = styled.li`
  padding: 15px 10px;
  color: #444;
`;

export const FooterUpperRightDiv = styled.div`
  padding: 15px 10px;
`;

export const FooterH4 = styled.h4`
  text-align: left;
  font-weight: 600;
`;

export const FooterBtnFlex = styled.div`
  width: 250px;
  height: 50px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterAppleBtn = styled.div`
  width: 100px;
  height: 40px;
  background-color: #ddd;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  &:hover {
    color: #aaa;
  }
`;

export const FooterLineDiv = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 1px;
  background-color: rgba(225, 225, 225, 0.5);
`;

export const FooterDownInfo = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const FooterDownInfoBox = styled.div`
  width: 100%;
  height: 100px;
  color: #888;
  font-weight: 300;
`;

export const FooterDownInfoP = styled.div`
  padding: 1px 10px;
`;

export const FooterDownInfoFlex1 = styled.div`
  width: 40%;
  color: #888;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterDownInfoFlex2 = styled.div`
  width: 80%;
  margin-top: 10px;
  color: #888;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const B = styled.b`
  font-weight: 500;
`;
