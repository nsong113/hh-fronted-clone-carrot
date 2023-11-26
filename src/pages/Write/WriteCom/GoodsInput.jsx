import React, { useEffect, useState } from 'react'
import * as St from '../style';
// import { Ionicons } from '@expo/vector-icons';
import useInputValue from '../../../hooks/useInputValue';
import { useMutation } from 'react-query';
import { addGoods } from '../../../apis/api/goods';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';


const GoodsInput = ({WriteGoodsTitle}) => {
  const navigate = useNavigate();

  const selection = {
    width: '120px',
    height: '30px',
    appearance: 'none',
    outline: 'none',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '13px',
    padding: '5px 10px',
    backgroundColor: 'transparent',
  };

  // const icon = {
  //   position: 'absolute',
  //   right: '10px',
  //   top: '50%',
  //   transform: 'translateY(-50%)',
  //   zIndex: '-1',
  //   color: 'var(--main-color)',
  // };

  const [goodsTitle, setGoodsTitle] = useState('');
  const [price, setPrice] = useState('');
  const [content, setContent] = useState('');
  const [si, setSi] = useState('');
  const [gu, setGu] = useState('');
  const [dong, setDong] = useState('');

  // 주소 합치기
  const [wishLocation, setWishLocation] = useState('');
  useEffect(() => {
    setWishLocation(si + ' ' + gu + ' ' + dong);
  }, [si, gu, dong]);

  const addGmutation = useMutation(addGoods,{
    onSuccess: () => {
      alert('상품이 추가되었습니다.');
      navigate('/');
    }, onError: (error) => {
      console.error('Error adding goods:', error);
      alert('상품이 추가되지 않았습니다.');
    }
  });

  // 새 상품 추가 (추후 유효성 검사 넣기 - 빈칸 !!!!!)
  const onClickAddHandler = () => {
    //추가할 새 상품
    const newGoods = {
      // goodsId: nanoid(10),
      goodsTitle,
      price,
      content,
      imageUrl: "",
      wishLocation,
      likeCount: Math.floor(Math.random() * 10),
      haveStock: true
      };
    addGmutation.mutate(newGoods);
    console.log(newGoods);
  };

  //취소버튼
  const onClickCancelHandler = () => {
    navigate('/');
  };

  return (
    <St.GoodsContainerDiv>
      <St.GoodsTitleP>{WriteGoodsTitle}</St.GoodsTitleP>
      <St.InputConfirmdiv>
        <St.InputBackSpan onClick={onClickCancelHandler}>취소</St.InputBackSpan>
        <St.InputCompleteSpan type="submit" onClick={onClickAddHandler}>완료</St.InputCompleteSpan>
      </St.InputConfirmdiv>
      <St.InputImgBtn>이미지 등록</St.InputImgBtn>
      <St.InputGoodsTitle placeholder='상품명' value={goodsTitle} onChange={e => setGoodsTitle(e.target.value)}/>
      <St.InputGoodsPrice placeholder='가격' value={price} type="number" onChange={e => setPrice(e.target.value)}/>
      <St.InputGoodsContents  value={content} onChange={e => setContent(e.target.value)}
        placeholder='상품 설명을 입력해주세요. 
        구매 시기, 모델명, 제품의 상태 (사용감, 하자 유무 등) 
        * SNS계정, 전화번호 등 개인정보는 입력하지 않도록 주의해주세요.
        안전하고 건전한 거래 환경을 위해 과학기술정보통신부, 한국인터넷진흥원과 함께합니다.'/>
      <St.SelectionFlex>
      <St.InputLocationLabel>거래 희망 장소</St.InputLocationLabel>
        <St.InputSelectContainer>
          <select name="si" style={selection} value={si} onChange={e => setSi(e.target.value)}>
            <option value="">시</option>
            <option value="서울시">서울시</option>
            <option value="경기도">경기도</option>
            <option value="강원도">강원도</option>
            <option value="충청도">충청도</option> 
            <option value="경상도">경상도</option>
            <option value="전라도">전라도</option>
            <option value="제주도">제주도</option>
          </select>
          {/* <IoMdArrowDropdown style={icon} /> */}
        </St.InputSelectContainer>

        <St.InputSelectContainer>
          <select name="gu" style={selection} value={gu} onChange={e => setGu(e.target.value)}>
            <option value="">구</option>
            <option value="강동구">강동구</option>
            <option value="강북구">강북구</option>
            <option value="광진구">광진구</option>
            <option value="노원구">노원구</option>
            <option value="도봉구">도봉구</option>
            <option value="마포구">마포구</option>
          </select>
          {/* <IoMdArrowDropdown style={icon} /> */}
        </St.InputSelectContainer>

        <St.InputSelectContainer>
          <select name="do" style={selection} value={dong} onChange={e => setDong(e.target.value)}>
            <option value="">동</option>
            <option value="강일동">강일동</option>
            <option value="고덕동">고덕동</option>
            <option value="길동">길동</option>
            <option value="둔촌동">둔촌동</option>
            <option value="암사동">암사동</option>
            <option value="명일동">명일동</option>
            <option value="천호동">천호동</option>
          </select>
          {/* <IoMdArrowDropdown style={icon} /> */}
        </St.InputSelectContainer>
      </St.SelectionFlex>
    </St.GoodsContainerDiv>
  )
}

export default GoodsInput