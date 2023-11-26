import axios from 'axios';

//댓글 조회
const getComments = async id => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/${id}`);
    console.log('getComments', res);
  } catch (error) {
    console.log(`getComments error`, error);
  }
};

// 댓글 추가
const postComments = async ({ id, content }) => {
  //나중에 goodsId로 바꾸기
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/${id}/comment`, content);
  console.log(response);
  //   return response.data;
};

export { postComments, getComments };
