import axios from 'axios';
// import config from './config';
import { instance } from '../config';

// 상품 조회
const getGoods = async () => {
  const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/goods`);
  return res.data;
};

// 상품 등록
const addGoods = async newGoods => {
  try {
    await instance.post(`/goods`, newGoods);
  } catch (error) {
    console.error('Error in addGoods :', error);
    throw error; // 에러를 다시 던져서 호출자(caller)에서 잡을 수 있게 함
  }
};

// 이미지 업로드
const UploadImg = async formData => {
  try {
  const res = await instance.post(`/v1/upload`, formData);
  console.log('이미지 업로드 res', res);
  alert('이미지가 등록되었습니다.');
  return res.data;
  } catch (error) {
    console.error('Error in UploadImg :', error);
  }
}

// 상품 수정
const updateGoods = async (goodsId, updatedGoods) => {
  try {
    await instance.put(`/goods/${goodsId}`, updatedGoods);
  } catch (error) {
    console.error('Error in updateGoods :', error);
  }
};

// 상품 삭제
const deleteGoods = async goodsId => {
  try {
    await instance.delete(`/goods/${goodsId}`);
  } catch (error) {
    console.error('Error in deleteGoods : ', error);
  }
}

export { getGoods, addGoods, UploadImg, updateGoods, deleteGoods };
