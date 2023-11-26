import axios from 'axios';

// 상품 조회
const getGoods = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/goods`);
  return response.data;
};

export { getGoods };
