import React from 'react';
import * as St from '../style';
import useInputValue from '../../../hooks/useInputValue';
import { loginPost } from '../../../apis/api/userInfo';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const [userName, onChangeUserNameHandler] = useInputValue();
  const [password, onChangePasswordHandler] = useInputValue();

  //추가할 유저 정보
  const loginUser = {
    username: userName,
    password: password,
  };

  //로그인 통신
  const loginMutation = useMutation(loginPost);

  const onClickLogInBtnHandler = e => {
    e.preventDefault();
    loginMutation.mutate(loginUser);
  };

  //회원가입 버튼
  const onClickSignUpHandler = e => {
    e.preventDefault();
    navigate('/signup');
  };

  return (
    <St.SignupContainerDiv>
      <St.SignupDiv>
        <St.SignupLogoDiv></St.SignupLogoDiv>
        <St.SignupBoxDiv>
          <form>
            <St.Signup1Div>
              <St.SignupH6>아이디</St.SignupH6>
              <div className="SignupFlex">
                <input
                  type="text"
                  placeholder="5 ~ 12자 이내의 영문, 숫자 조합을 입력하세요"
                  style={inputStyle}
                  value={userName}
                  onChange={onChangeUserNameHandler}
                />
              </div>
              {5 <= userName.length && userName.length <= 12 && /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(userName) ? (
                <p></p>
              ) : (
                <St.SignupErrorMsgP>5 ~ 12자 이내의 영문, 숫자 조합을 입력하세요</St.SignupErrorMsgP>
              )}
            </St.Signup1Div>
            <St.Signup1Div>
              <St.SignupH6>비밀번호</St.SignupH6>
              <input
                type="password"
                placeholder="비밀번호는 5~12자 이내로 입력하세요"
                style={inputStyle}
                value={password}
                onChange={onChangePasswordHandler}
              />
              {5 <= password.length && password.length <= 12 ? (
                <p></p>
              ) : (
                <St.SignupErrorMsgP>비밀번호는 5~12자 이내로 입력하세요</St.SignupErrorMsgP>
              )}
            </St.Signup1Div>

            <St.SignupFlex>
              <St.SignupCancelBtn onClick={onClickSignUpHandler}>회원가입</St.SignupCancelBtn>
              <St.SignupCancelBtn type="submit" onClick={onClickLogInBtnHandler}>
                로그인
              </St.SignupCancelBtn>
            </St.SignupFlex>
          </form>
        </St.SignupBoxDiv>
      </St.SignupDiv>
    </St.SignupContainerDiv>
  );
};

export default Login;

///스타일
const inputStyle = {
  width: '300px',
  height: '30px',
  fontSize: '13px',
  marginTop: '5px',
  outline: 'none',
  border: '1px solid #ddd',
  borderRadius: '5px',
};
