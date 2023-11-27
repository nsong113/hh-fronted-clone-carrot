import axios from 'axios';

// 상품 조회
const getGoods = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/goods`);
  return response.data;
};

// 상품 등록
const addGoods = async (newGoods) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/goods`,newGoods);
};


export { getGoods, addGoods };
