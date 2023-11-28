import axios from 'axios';

// 상품 조회
const getGoods = async () => {
  const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/goods`);
  return res.data;
};

// 상품 등록
const addGoods = async newGoods => {
  try {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/goods`, newGoods);
  } catch (error) {
    console.error('Error in addGoods:', error);
    throw error; // 에러를 다시 던져서 호출자(caller)에서 잡을 수 있게 함
  }
};

// 이미지 업로드
const UploadImg = async formData => {
  const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/v1/upload`, formData);
  return res.data;
}


export { getGoods, addGoods, UploadImg };
