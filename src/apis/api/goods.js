import axios from 'axios';

// 상품 조회
const getGoods = async () => {
  await axios.get(`${process.env.REACT_APP_SERVER_URL}/goods`)
  .then((res)=>{
    console.log("axios getGoods",res.data);
  }).catch((error)=>{
    alert("상품을 불러오지 못했습니다.",error);
  });
};

// 상품 등록
const addGoods = async (newGoods) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/goods`,newGoods);
};




export { getGoods, addGoods };
