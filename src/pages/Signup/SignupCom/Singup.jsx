import React, { useCallback, useEffect, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import useInputValue from '../../../hooks/useInputValue';
import { signupPost } from '../../../apis/api/userInfo';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import * as St from '../style';
import { signupCheckDuplicationGet } from '../../../apis/api/userInfo';
import { debounce } from 'lodash';
import axios from 'axios';

const Singup = () => {
  //인라인스타일링
  const inputStyle = {
    width: '300px',
    height: '30px',
    fontSize: '13px',
    marginTop: '5px',
    outline: 'none',
    border: '1px solid #ddd',
    borderRadius: '5px',
  };

  const selection = {
    width: '98%',
    height: '30px',
    appearance: 'none',
    outline: 'none',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '13px',
    padding: '5px 10px',
    backgroundColor: 'transparent',
  };

  const icon = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '-1',
    color: 'var(--main-color)',
  };

  ////////////////////////////////////////////////////////
  //input 상태관리
  const navigate = useNavigate();
  const [nickName, onChangeNickNameHandler] = useInputValue();
  const [userName, onChangeUserNameHandler] = useInputValue();
  const [password, onChangePasswordHandler] = useInputValue();
  const [confirmPassword, onChangeConfirmPasswordHandler] = useInputValue();
  const [email, onChangeEmailHandler] = useInputValue();
  const [phoneNum, onChangePhoneNumHandler] = useInputValue();
  const [si, onChangeSiHandler] = useInputValue();
  const [gu, onChangeGuHandler] = useInputValue();
  const [dong, onChangeDongHandler] = useInputValue();

  //username 중복검사
  const onChangeDuplicateHandler = e => {
    debounceOnChange();
  };

  const debounceOnChange = debounce(async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/signup/checkName`, {
        params: {
          username: userName,
        },
      });
      console.log(res);
    } catch (error) {
      console.log('debounceOnChange error', error);
    }
  }, 1500);

  //주소 합치기
  const [address, setAddress] = useState('');
  useEffect(() => {
    setAddress(si + ' ' + gu + ' ' + dong);
  }, [si, gu, dong]);

  //추가할 유저 정보
  const newUser = {
    nickname: nickName,
    username: userName,
    password: password,
    phoneNumber: phoneNum,
    address: address,
  };

  //회원가입 통신
  const signupMutation = useMutation(signupPost);

  const onClickSignUpBtnHandler = e => {
    e.preventDefault();
    signupMutation.mutate(newUser);
  };

  //취소버튼
  const onClickCancelHandler = e => {
    e.preventDefault();
    navigate('/login');
  };

  ///////////////////////////////////////////////////////////////
  return (
    <St.SignupContainerDiv>
      <St.SignupDiv>
        <St.SignupBoxDiv>
          <form>
            <St.Signup1Div>
              <St.SignupH6>닉네임</St.SignupH6>
              <input
                type="text"
                placeholder="닉네임을 입력하세요"
                style={inputStyle}
                value={nickName}
                onChange={onChangeNickNameHandler}
              />
            </St.Signup1Div>
            <St.Signup1Div>
              <St.SignupH6>아이디</St.SignupH6>
              <div className="SignupFlex">
                <input
                  type="text"
                  placeholder="5 ~ 12자 이내의 영문, 숫자 조합을 입력하세요"
                  style={inputStyle}
                  value={userName}
                  onChange={e => {
                    onChangeUserNameHandler(e);
                    onChangeDuplicateHandler(e);
                  }}
                />
                {/* <div>중복 확인</div> */}
              </div>
              {5 <= userName.length && userName.length <= 12 && /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(userName) ? (
                <p style={{ color: 'transparent', userSelect: 'none' }}>.</p>
              ) : (
                <St.SignupErrorMsgP>5 ~ 12자 이내의 영문, 숫자 조합을 입력하세요</St.SignupErrorMsgP>
              )}
              {/* <p>아이디 중복을 확인하세요</p> */}
              {/* <p>사용가능한 아이디입니다.</p> */}
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
                <p style={{ color: 'transparent', userSelect: 'none' }}>.</p>
              ) : (
                <St.SignupErrorMsgP>비밀번호는 5~12자 이내로 입력하세요</St.SignupErrorMsgP>
              )}
            </St.Signup1Div>
            <St.Signup1Div>
              <St.SignupH6>비밀번호 확인</St.SignupH6>
              <input
                type="password"
                placeholder="비밀번호를 확인하세요"
                style={inputStyle}
                value={confirmPassword}
                onChange={onChangeConfirmPasswordHandler}
              />
              {!confirmPassword || password !== confirmPassword ? (
                <St.SignupErrorMsgP>비밀번호가 일치하지 않습니다.</St.SignupErrorMsgP>
              ) : (
                <St.SignupErrorMsgP>비밀번호가 일치합니다.</St.SignupErrorMsgP>
              )}
            </St.Signup1Div>
            <St.Signup1Div>
              <St.SignupH6>이메일</St.SignupH6>
              <input
                type="text"
                placeholder="이메일을 입력하세요."
                style={inputStyle}
                value={email}
                onChange={onChangeEmailHandler}
              />
              {email.length === 0 ? <St.SignupErrorMsgP>이메일을 입력하세요</St.SignupErrorMsgP> : <p></p>}
              {email.length !== 0 && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ? (
                <St.SignupErrorMsgP>이메일 형식이 올바르지 않습니다.</St.SignupErrorMsgP>
              ) : (
                <p style={{ color: 'transparent', userSelect: 'none' }}>.</p>
              )}
            </St.Signup1Div>
            <St.Signup1Div>
              <St.SignupH6>전화번호</St.SignupH6>
              <input
                type="text"
                placeholder="전화번호를 입력하세요."
                style={inputStyle}
                value={phoneNum}
                onChange={onChangePhoneNumHandler}
              />
              {!/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/.test(phoneNum) ? (
                <St.SignupErrorMsgP>010-1234-5678형식으로 입력해주세요</St.SignupErrorMsgP>
              ) : (
                <p style={{ color: 'transparent', userSelect: 'none' }}>.</p>
              )}
            </St.Signup1Div>
            <St.SignupAddressDiv>
              <St.SignupH6>주소지</St.SignupH6>
              <St.SelectionFlex>
                <St.SignupSelectContainer>
                  <select name="si" style={selection} value={si} onChange={onChangeSiHandler}>
                    <option value="">시</option>
                    <option value="서울시">서울시</option>
                    <option value="경기도">경기도</option>
                    <option value="강원도">강원도</option>
                    <option value="충청도">충청도</option>
                    <option value="경상도">경상도</option>
                    <option value="전라도">전라도</option>
                    <option value="제주도">제주도</option>
                  </select>
                  <IoMdArrowDropdown style={icon} />
                </St.SignupSelectContainer>

                <St.SignupSelectContainer>
                  <select name="gu" style={selection} value={gu} onChange={onChangeGuHandler}>
                    <option value="">구</option>
                    <option value="강동구">강동구</option>
                    <option value="강북구">강북구</option>
                    <option value="광진구">광진구</option>
                    <option value="노원구">노원구</option>
                    <option value="도봉구">도봉구</option>
                    <option value="마포구">마포구</option>
                  </select>
                  <IoMdArrowDropdown style={icon} />
                </St.SignupSelectContainer>

                <St.SignupSelectContainer>
                  <select name="do" style={selection} value={dong} onChange={onChangeDongHandler}>
                    <option value="">동</option>
                    <option value="강일동">강일동</option>
                    <option value="고덕동">고덕동</option>
                    <option value="길동">길동</option>
                    <option value="둔촌동">둔촌동</option>
                    <option value="암사동">암사동</option>
                    <option value="명일동">명일동</option>
                    <option value="천호동">천호동</option>
                  </select>
                  <IoMdArrowDropdown style={icon} />
                </St.SignupSelectContainer>
              </St.SelectionFlex>
            </St.SignupAddressDiv>
            <St.SignupFlex>
              <St.SignupCancelBtn $cancel={'cancel'} onClick={onClickCancelHandler}>
                취소
              </St.SignupCancelBtn>
              <St.SignupCancelBtn type="submit" onClick={onClickSignUpBtnHandler}>
                가입 완료
              </St.SignupCancelBtn>
            </St.SignupFlex>
          </form>
        </St.SignupBoxDiv>
      </St.SignupDiv>
    </St.SignupContainerDiv>
  );
};

export default Singup;
