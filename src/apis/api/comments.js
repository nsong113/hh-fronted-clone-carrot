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

export { postComments, getComments };
