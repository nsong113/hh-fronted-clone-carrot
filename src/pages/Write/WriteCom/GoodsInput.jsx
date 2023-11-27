import React, { useEffect, useState } from 'react'
import * as St from '../style';
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import useInputValue from '../../../hooks/useInputValue';
import { useMutation } from 'react-query';
import { addGoods } from '../../../apis/api/goods';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';


const GoodsInput = ({WriteGoodsTitle}) => {
  const navigate = useNavigate();
  // 인라인 스타일==========
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

  const imgIcon = {
    width: '50px',
    height: '50px',
    margin: '0 auto',
    color: '#bbb',
  }
  const icon = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '-1',
    color: 'var(--main-color)',
  };
  // ====================

  // 상품 추가 (완료버튼)
  const onClickAddHandler = () => {
    const newGoods = {
      goodsTitle,
      price,
      contents,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq4S9La2QVLk-zhJwtpm3IQqj-DeVrJLZV3Q&usqp=CAU",
      wishLocation,
      likeCount: Math.floor(Math.random()),
      haveStock: true
      };
    addGmutation.mutate(newGoods);
    console.log(newGoods);
    };

  // 메인으로 (취소버튼)
  const onClickCancelHandler = () => {
    navigate('/');
  };

  const [imgFile,setImgFile] = useState()
  const [goodsTitle, onChangeGoodsTitleHandler] = useInputValue();
  const [price, onChangePriceHandler] = useInputValue();
  const [contents, onChangeContentsHandler] = useInputValue();
  const [si, onChangeSiHandler] = useInputValue();
  const [gu, onChangeGuHandler] = useInputValue();
  const [dong, onChangeDongHandler] = useInputValue();


  // 주소 합치기
  const [wishLocation, setWishLocation] = useState('');
  useEffect(() => {
    setWishLocation(si + ' ' + gu + ' ' + dong);
  }, [si, gu, dong]);

  const addGmutation = useMutation(addGoods,{
    onSuccess: () => {
      alert('상품이 추가되었습니다.');
      navigate('/');
    },
  });

  const onChangeImg = (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    if(e.target.files){
      const uploadFile = e.target.files[0]
      formData.append('file',uploadFile)
      setImgFile(uploadFile)
      console.log(uploadFile)
      console.log('===useState===')
      console.log(imgFile)
    }
  };

  return (
    <St.GoodsContainerDiv>
      <St.GoodsTitleP>{WriteGoodsTitle}</St.GoodsTitleP>
      <St.InputConfirmdiv>
        <St.InputBackSpan onClick={onClickCancelHandler}>취소</St.InputBackSpan>
        <St.InputCompleteSpan onClick={onClickAddHandler}>완료</St.InputCompleteSpan>
      </St.InputConfirmdiv>
      <form>
        <St.InputImgLabel>
          <MdAddPhotoAlternate style={imgIcon}/>
          <p>이미지 등록</p>
        </St.InputImgLabel>
        <input type="file" accept="image/*" style={{display: 'none'}} onChange={onChangeImg}/>
      </form>
      <St.InputGoodsTitle placeholder='상품명' value={goodsTitle} onChange={onChangeGoodsTitleHandler}/>
      <St.InputGoodsPrice placeholder='가격' value={price} type="number" onChange={onChangePriceHandler}/>
      <St.InputGoodsContents  value={contents} onChange={onChangeContentsHandler}
        placeholder='상품 설명을 입력해주세요. 
        구매 시기, 모델명, 제품의 상태 (사용감, 하자 유무 등) 
        * SNS계정, 전화번호 등 개인정보는 입력하지 않도록 주의해주세요.
        안전하고 건전한 거래 환경을 위해 과학기술정보통신부, 한국인터넷진흥원과 함께합니다.'/>
      <St.SelectionFlex>
      <St.InputLocationLabel>거래 희망 장소</St.InputLocationLabel>
        <St.InputSelectContainer>
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
        </St.InputSelectContainer>

        <St.InputSelectContainer>
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
        </St.InputSelectContainer>

        <St.InputSelectContainer>
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
        </St.InputSelectContainer>
      </St.SelectionFlex>
    </St.GoodsContainerDiv>
  )
}

export default GoodsInput