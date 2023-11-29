import axios from 'axios';
import { instance } from '../config';

//댓글 조회
const getComments = async goodsId => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/goods/${goodsId}`);
    return res.data;
  } catch (error) {
    console.log(`getComments error`, error);
  }
};

// 댓글 추가
const postComments = async ({ goodsId, content }) => {
  //나중에 goodsId로 바꾸기
  const response = await instance.post(`/goods/${goodsId}comment`, content);
  return response.data;
};

//댓글 삭제
const deleteComments = async ({ goodsId, commentId }) => {
  try {
    const res = await instance.delete(`/goods/${goodsId}/comment/${commentId}`);

    return res;
  } catch (error) {
    console.log('deleteComments error', error);
  }
};

//좋아요 추가
const addLikeCount = async goodsId => {
  try {
    const res = await instance.post(`/goods/${goodsId}/like`, null);
    console.log(res);
  } catch (error) {
    console.log('addLikeCount error', error);
  }
};

//좋아요 삭제
const deleteLikeCount = async goodsId => {
  try {
    const res = await instance.delete(`/goods/${goodsId}/like`);
  } catch (error) {
    console.log('deleteLikeCount error', error);
  }
};

export { postComments, getComments, deleteComments, addLikeCount, deleteLikeCount };
