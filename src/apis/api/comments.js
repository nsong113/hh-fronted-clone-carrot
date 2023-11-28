import axios from 'axios';

//댓글 조회
const getComments = async goodsId => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/comments/${goodsId}`);
    // console.log('getComments', res.data.comments);
    return res.data;
  } catch (error) {
    console.log(`getComments error`, error);
  }
};

// 댓글 추가
const postComments = async ({ goodsId, content }) => {
  //나중에 goodsId로 바꾸기
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/comments/${goodsId}`, content);
  return response.data;
};

//댓글 삭제
const deleteComments = async ({ goodsId, commentId }) => {
  try {
    const res = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/${goodsId}/comment/${commentId}`);

    return res;
  } catch (error) {
    console.log('deleteComments error', error);
  }
};

//좋아요 추가
const addLikeCount = async goodsId => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/goods/${goodsId}/like`, null, {
      headers: () => {
        //
      },
    });
    console.log(res);
  } catch (error) {
    console.log('addLikeCount error', error);
  }
};

//좋아요 삭제
const deleteLikeCount = async goodsId => {
  try {
    const res = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/goods/${goodsId}/like`, {
      headers: () => {
        //
      },
    });
  } catch (error) {
    console.log('deleteLikeCount error', error);
  }
};

export { postComments, getComments, deleteComments, addLikeCount, deleteLikeCount };
