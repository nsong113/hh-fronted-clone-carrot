import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import * as St from '../style';

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

  return (
    <St.SignupContainerDiv>
      <St.SignupDiv>
        <St.SignupLogoDiv></St.SignupLogoDiv>
        <St.SignupBoxDiv>
          <form>
            <St.Signup1Div>
              <St.SignupH6>아이디</St.SignupH6>
              <div className="SignupFlex">
                <input type="text" placeholder="5 ~ 12자 이내의 영문, 숫자 조합을 입력하세요" style={inputStyle} />
                {/* <div>중복 확인</div> */}
              </div>
              <St.SignupErrorMsgP>5 ~ 12자 이내의 영문, 숫자 조합을 입력하세요</St.SignupErrorMsgP>
              {/* <p>아이디 중복을 확인하세요</p> */}
              {/* <p>사용가능한 아이디입니다.</p> */}
            </St.Signup1Div>
            <St.Signup1Div>
              <St.SignupH6>비밀번호</St.SignupH6>
              <input type="password" placeholder="비밀번호는 5~12자 이내로 입력하세요" style={inputStyle} />
              <St.SignupErrorMsgP>비밀번호는 5~12자 이내로 입력하세요</St.SignupErrorMsgP>
            </St.Signup1Div>
            <St.Signup1Div>
              <St.SignupH6>비밀번호 확인</St.SignupH6>
              <input type="password" placeholder="비밀번호를 확인하세요" style={inputStyle} />
              <St.SignupErrorMsgP>비밀번호가 일치하지 않습니다.</St.SignupErrorMsgP>
              <St.SignupErrorMsgP>비밀번호가 일치합니다.</St.SignupErrorMsgP>
            </St.Signup1Div>
            <St.Signup1Div>
              <St.SignupH6>이메일</St.SignupH6>
              <input type="text" placeholder="이메일을 입력하세요." style={inputStyle} />
              <St.SignupErrorMsgP>이메일을 입력하세요</St.SignupErrorMsgP>
              <St.SignupErrorMsgP>이메일 형식이 올바르지 않습니다.</St.SignupErrorMsgP>
            </St.Signup1Div>
            <St.Signup1Div>
              <St.SignupH6>전화번호</St.SignupH6>
              <input type="text" placeholder="전화번호를 입력하세요." style={inputStyle} />
            </St.Signup1Div>
            <St.SignupAddressDiv>
              <St.SignupH6>주소지</St.SignupH6>
              <St.SelectionFlex>
                <St.SignupSelectContainer>
                  <select name="si" style={selection}>
                    <option value="">시</option>
                    <option value="">서울특별시</option>
                    <option value="">경기도</option>
                    <option value="">강원도</option>
                    <option value="">충청북도</option>
                    <option value="">충청남도</option>
                    <option value="">경상북도</option>
                    <option value="">경상남도</option>
                    <option value="">전라북도</option>
                    <option value="">전라남도</option>
                    <option value="">제주도</option>
                  </select>
                  <IoMdArrowDropdown style={icon} />
                </St.SignupSelectContainer>
                <St.SignupSelectContainer>
                  <select name="gu" style={selection}>
                    <option value="">구</option>
                    <option value="">강동구</option>
                    <option value="">강북구</option>
                    <option value="">광진구</option>
                    <option value="">노원구</option>
                    <option value="">도봉구</option>
                    <option value="">동대문구</option>
                    <option value="">마포구</option>
                    <option value="">서대문구</option>
                    <option value="">중구</option>
                  </select>
                  <IoMdArrowDropdown style={icon} />
                </St.SignupSelectContainer>

                <St.SignupSelectContainer>
                  <select name="do" style={selection}>
                    <option value="">동</option>
                    <option value="">강일동</option>
                    <option value="">고덕동</option>
                    <option value="">길동</option>
                    <option value="">둔촌동</option>
                    <option value="">암사동</option>
                    <option value="">명일동</option>
                    <option value="">천호동</option>
                  </select>
                  <IoMdArrowDropdown style={icon} />
                </St.SignupSelectContainer>
              </St.SelectionFlex>
            </St.SignupAddressDiv>
            <St.SignupFlex>
              <St.SignupCancelBtn>취소</St.SignupCancelBtn>
              <St.SignupCancelBtn>가입 완료</St.SignupCancelBtn>
            </St.SignupFlex>
          </form>
        </St.SignupBoxDiv>
      </St.SignupDiv>
    </St.SignupContainerDiv>
  );
};

export default Singup;
