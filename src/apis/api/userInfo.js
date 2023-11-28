import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';

const cookies = new Cookies();

//회원가입
const signupPost = async newUser => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/signup`, newUser, {
      withCredentials: true,
    });

    console.log(res);
  } catch (error) {
    console.log('signup error', error);
  }
};

//로그인
const loginPost = async loginUser => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, loginUser, {
      withCredentials: true,
    });
    alert(`${res.data.message}`);

    console.log(res);

    // const token = res.data.token;
    // sessionStorage.setItem('token', token);

    return res.status;
  } catch (error) {
    console.log('loginPost error', error);
  }
};

//회원가입 userId 중복 확인 get
const signupCheckDuplicationGet = async username => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/signup/check-name`, {
      params: {
        username: username,
      },
    });
    console.log(res);
  } catch (error) {
    console.log(`signupCheckDuplicationGet error`, error);
  }
};

//인가 예시
const getData = async () => {
  const accessToken = cookies.get('accessToken');
  try {
    const res = await axios.get(``, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res;
  } catch (error) {}
};

export { signupPost, loginPost, signupCheckDuplicationGet };
