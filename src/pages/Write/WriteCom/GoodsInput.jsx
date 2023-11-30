import React, { useEffect, useState } from 'react'
import * as St from '../style';
import { IoMdArrowDropdown } from "react-icons/io";
import useInputValue from '../../../hooks/useInputValue';
import { useMutation } from 'react-query';
import { UploadImg, addGoods } from '../../../apis/api/goods';
import { useNavigate } from 'react-router-dom';


const GoodsInput = ({WriteGoodsTitle}) => {
  const navigate = useNavigate();

  const [imgFile,setImgFile] = useState({
    image_file: "",
    preview_URL: "../default_uploadImg.png",
  });
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

  const  uploadImgMutation = useMutation(UploadImg,{
    onSuccess: (data) => {
      console.log('이미지 업로드 성공:', data);
    },
  });

  // 이미지 업로드
  const onChangeImg = async (e) => {
    const formData = new FormData();
    
    if(e.target.files){
      // 새로운 이미지 올리면 createObjectURL()로 생성한 기존 URL 폐기
      URL.revokeObjectURL(imgFile.preview_URL);

      const uploadFile = e.target.files[0]
      formData.append('file',uploadFile)
      // 이미지 업로드 요청
      await uploadImgMutation.mutateAsync(formData);
      // uploadImgMutation.mutate(formData);
      // 리턴값없음
      
      const preview_URL = URL.createObjectURL(uploadFile);
      setImgFile(() => (
        {
          image_file: e.target.files[0],
          preview_URL: preview_URL
        }
      ))
      console.log("uploadFile : ",uploadFile)
      console.log('useState(setImgFile) : ',imgFile)
    }
  };

  useEffect(()=> {
    return () => {
      // 컴포넌트 언마운트되면 createObjectURL()로 생성한 기존 URL 폐기
      URL.revokeObjectURL(imgFile.preview_URL)
    }
  }, [])

  // 상품 추가 (완료버튼)
  const onClickAddHandler = async () => {
    // 이미지 업로드가 완료된 후에 data 가져오기
    await uploadImgMutation.mutateAsync();
    const newGoods = {
      goodsTitle,
      price,
      contents,
      imageURL: uploadImgMutation.data.imageURL[0],
      wishLocation,
      haveStock: true
      };
    addGmutation.mutate(newGoods);
    console.log(newGoods);
    };

  // 메인으로 (취소버튼)
  const onClickCancelHandler = () => {
    navigate('/');
  };

  return (
    <St.GoodsContainerDiv>
      <St.GoodsTitleP>{WriteGoodsTitle}</St.GoodsTitleP>
      <St.InputConfirmdiv>
        <St.InputBackSpan onClick={onClickCancelHandler}>취소</St.InputBackSpan>
        <St.InputCompleteSpan onClick={onClickAddHandler}>완료</St.InputCompleteSpan>
      </St.InputConfirmdiv>

      <form onSubmit={e => {e.preventDefault()}} encType="multipart/form-data" >
        <St.InputImgLabel htmlFor="img">
          <St.InputImg src={imgFile.preview_URL} />
          <St.InputImgP>이미지 등록</St.InputImgP>
        </St.InputImgLabel>
        <input id="img" type="file" accept="image/*" style={{display: 'none'}} 
        onChange={onChangeImg}
        // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그 발생할 수 있음
        onClick={(e) => e.target.value = null}
        />
      </form>

      <St.InputGoodsTitle placeholder='상품명' value={goodsTitle} onChange={onChangeGoodsTitleHandler}/>
      <St.InputGoodsPrice placeholder='가격' 
        value={price} onChange={onChangePriceHandler}
        type="text" onInput={(e) => { // 숫자가 아닌 문자 제거
        e.target.value = e.target.value.replace(/[^\d]/g, '');}}/>
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

const icon = {
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: '-1',
  color: 'var(--main-color)',
};
// ====================