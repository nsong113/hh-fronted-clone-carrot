import { styled } from 'styled-components';
import carrotLogo from './carrot_logo.png';

export const SignupContainerDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignupDiv = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  transform: translateY(10%);
  box-shadow: -4px 3px 34px -1px rgba(255, 111, 15, 0.44);
  -webkit-box-shadow: -4px 3px 34px -1px rgba(255, 111, 15, 0.44);
  -moz-box-shadow: -4px 3px 34px -1px rgba(255, 111, 15, 0.44);
`;

export const SignupLogoDiv = styled.div`
  width: 110px;
  height: 50px;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-image: url(${carrotLogo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SignupBoxDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignupErrorMsgP = styled.p`
  color: var(--main-color);
  font-size: 12px;
  margin-top: 5px;
`;

export const SignupH6 = styled.h6`
  font-size: 13px;
`;

export const Signup1Div = styled.div`
  margin-top: 10px;
`;

export const SignupAddressDiv = styled.div`
  margin-top: 10px;
`;

export const SignupFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SignupCancelBtn = styled.button`
  width: 40%;
  height: 35px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 13px;
  background-color: var(--main-color);
  color: white;
  outline: none;
  border: none;
`;

export const SignupSelectContainer = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 5px;
  background-color: transparent;
  position: relative;
  outline: none;
`;

export const SelectionFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
