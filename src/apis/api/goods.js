import axios from 'axios';

// 상품 조회
const getGoods = async () => {
  await axios.get(`${process.env.REACT_APP_SERVER_URL}/goods`)
  .then((res)=>{
    console.log("axios getGoods",res.data);
  }).catch((error)=>{
    console.log("상품을 불러오지 못했습니다.",error);
  });
};
// 상품 등록
const addGoods = async (newGoods) => {
  try {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/goods`, newGoods);
  } catch (error) {
    console.error('Error in addGoods:', error);
    throw error; // 에러를 다시 던져서 호출자(caller)에서 잡을 수 있게 함
  }
};


export { getGoods, addGoods };
