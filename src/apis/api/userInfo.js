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
    const setCookieHeader = res.headers.get('Authorization');
    document.cookie = setCookieHeader;

    // const setCookie = res.headers.get('Set-Cookie');
    // const setCookie = res.headers['Authorization'];
    // console.log('header', setCookie.headers);
    // console.log('setCookie', setCookie);

    //1
    // const token = res.data.token;
    // sessionStorage.setItem('token', token);

    //2
    // 서버 응답에서 Set-Cookie 헤더를 추출
    // const setCookieHeader = response.headers.get('Set-Cookie');

    // // 쿠키를 로컬에 저장
    // document.cookie = setCookieHeader;

    // // 쿠키에서 특정 쿠키 값을 가져오기
    // const authToken = document.cookie
    //   .split('; ')
    //   .find(row => row.startsWith('Authorization='))
    //   .split('=')[1];

    // // authToken을 어딘가에 저장하거나 사용

    //3.
    // localStorage.setItem('token', setCookieHeader);
    //sessionStorage.setItem('token',setCookieHeader)

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
