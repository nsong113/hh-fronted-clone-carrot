import React from 'react';
import { FaGooglePlay } from 'react-icons/fa';
import { GiAppleSeeds } from 'react-icons/gi';
import * as St from './style';

const Footer = () => {
  return (
    <St.FooterContainer>
      <St.FooterWrap>
        <St.FooterUpperPartDiv>
          <St.FooterUpperLeftDiv>
            <ul className="FooterUl">
              <St.FooterLi>중고거래</St.FooterLi>
              <St.FooterLi>동네업체</St.FooterLi>
              <St.FooterLi>당근알바</St.FooterLi>
              <St.FooterLi>부동산 직거래</St.FooterLi>
              <St.FooterLi>중고차 직거래</St.FooterLi>
            </ul>

            <ul className="FooterUl">
              <St.FooterLi>당근비즈니스</St.FooterLi>
              <St.FooterLi>채팅하기</St.FooterLi>
            </ul>

            <ul className="FooterUl">
              <St.FooterLi>자주 묻는 질문</St.FooterLi>
              <St.FooterLi>회사 소개</St.FooterLi>
              <St.FooterLi>인재 채용</St.FooterLi>
            </ul>
          </St.FooterUpperLeftDiv>
          <St.FooterUpperRightDiv>
            <St.FooterH4>당근 앱 다운로드</St.FooterH4>
            <St.FooterBtnFlex>
              <St.FooterAppleBtn>
                <GiAppleSeeds />
                App Store
              </St.FooterAppleBtn>
              <St.FooterAppleBtn>
                <FaGooglePlay />
                Google Store
              </St.FooterAppleBtn>
            </St.FooterBtnFlex>
          </St.FooterUpperRightDiv>
        </St.FooterUpperPartDiv>
        <St.FooterLineDiv></St.FooterLineDiv>
        <St.FooterDownInfo>
          <St.FooterDownInfoBox>
            <St.FooterDownInfoP>
              <St.B>대표</St.B> 김용현, 황도연
            </St.FooterDownInfoP>
            <St.FooterDownInfoP>
              <St.B>직업정보제공사업 신고번호</St.B> J1200020200016
            </St.FooterDownInfoP>
            <St.FooterDownInfoP>
              <St.B>주소</St.B> 서울특별시 구로구 디지털로 30길 28, 609호
            </St.FooterDownInfoP>
            <St.FooterDownInfoP>
              <St.B>전화</St.B> 1544-9796
            </St.FooterDownInfoP>
          </St.FooterDownInfoBox>
          <St.FooterDownInfoFlex1>
            <St.FooterDownInfoP>제휴 문의</St.FooterDownInfoP>
            <St.FooterDownInfoP>광고 문의</St.FooterDownInfoP>
            <St.FooterDownInfoP>PR 문의</St.FooterDownInfoP>
            <St.FooterDownInfoP>IR 문의</St.FooterDownInfoP>
          </St.FooterDownInfoFlex1>
          <St.FooterDownInfoFlex2>
            <St.FooterDownInfoP>이용 약관</St.FooterDownInfoP>
            <St.B>개인정보처리방침</St.B>
            <St.FooterDownInfoP>위치기반서비스 이용약관</St.FooterDownInfoP>
            <St.FooterDownInfoP>이용자보호 비전과 계획</St.FooterDownInfoP>
            <St.FooterDownInfoP>청소년보호정책</St.FooterDownInfoP>
          </St.FooterDownInfoFlex2>
        </St.FooterDownInfo>
      </St.FooterWrap>
    </St.FooterContainer>
  );
};

export default Footer;
