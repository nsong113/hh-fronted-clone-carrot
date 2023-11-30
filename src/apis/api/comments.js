import axios from 'axios';
import { instance } from '../config';

//댓글 조회
const getComments = async goodsId => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/goods/${goodsId}`);
    console.log('getComments (/상세정보글조회)성공', res);
    return res.data;
  } catch (error) {
    console.log(`getComments (/상세정보글조회)error`, error);
  }
};

// 댓글 추가
const postComments = async ({ goodsId, content }) => {
  try {
    const res = await instance.post(`/goods/${goodsId}/comment`, content);
    console.log('postComments 성공', res);
    return res;
  } catch (error) {
    console.log('postComments error', error);
  }
};

//댓글 삭제
const deleteComments = async ({ goodsId, commentId }) => {
  try {
    const res = await instance.delete(`/goods/${goodsId}/comment/${commentId}`);
    console.log('deleteComments 성공', res);
    return res;
  } catch (error) {
    console.log('deleteComments error', error);
  }
};

//좋아요 추가
const addLikeCount = async goodsId => {
  try {
    const res = await instance.post(`/goods/${goodsId}/like`, null);
    console.log('addLikeCount 성공', res);
  } catch (error) {
    console.log('addLikeCount error', error);
  }
};

//좋아요 삭제
const deleteLikeCount = async goodsId => {
  try {
    const res = await instance.delete(`/goods/${goodsId}/like`);
    console.log('deleteLikeCount 성공', res);
  } catch (error) {
    console.log('deleteLikeCount error', error);
  }
};

export { postComments, getComments, deleteComments, addLikeCount, deleteLikeCount };
