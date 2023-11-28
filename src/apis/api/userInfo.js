import axios from 'axios';
import { setCookie, getCookie } from './cookies';

//회원가입
// const signupPost = async newUser => {
//   try {
//     const res = await instance.post('/signup', newUser, {
//       withCredentials: true,
//     });

//     console.log(res);
//   } catch (error) {
//     console.log('signup error', error);import axios from 'axios';

//axios 인스턴스를 만들어서 가공할 것
export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(
  //request 보내기 전 수행
  function (config) {
    console.log('인터셉터 request 요청 성공');
    config.headers['authorization'] = getCookie('authorization');
    console.log(config);
    return config;
  },

  //request 오류 요청을 보내기 전 수행
  function (error) {
    console.log('인터셉터 request 오류');
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  //응답을 내보내기 전 수행되는 함수
  function (config) {
    console.log('인터셉터 response 요청 성공');
    return config;
  },

  //오류 응답을 내보내기 전 수행되는 함수
  function (error) {
    console.log('인터셉터 response 오류');
    return Promise.reject(error);
  },
);

//   }
// };

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

// const loginPost = async loginUser => {
//   try {
//     const res = await instance.post('/login', loginUser, {
//       withCredentials: true,
//     });
//     alert(`${res.data.message}`);

//     const { authorization } = res.headers;
//     if (authorization) {
//       setCookie('authorization', authorization, {
//         path: '/',
//         // secure: '/',
//         // expires: new Data().getMinutes() + 1;
//       });
//     }

//     return res.status;
//   } catch (error) {
//     console.log('loginPost error', error);
//   }
// };

const loginPost = async loginUser => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, loginUser, {
      withCredentials: true,
    });
    alert(`${res.data.message}`);

    const { authorization } = res.headers;
    if (authorization) {
      setCookie('authorization', authorization, {
        path: '/',
        // secure: '/',
        // expires: new Data().getMinutes() + 1;
      });
    }

    return res.status;
  } catch (error) {
    console.log('loginPost error', error);
  }
};
////////////////////////////////////////////////////////////////////////////////////
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

//회원가입 userId 중복 확인 get
// const signupCheckDuplicationGet = async username => {
//   try {
//     const res = await instance.get('/signup/check-name', {
//       params: {
//         username: username,
//       },
//     });
//     console.log(res);
//   } catch (error) {
//     console.log(`signupCheckDuplicationGet error`, error);
//   }
// };

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

export { signupPost, loginPost, signupCheckDuplicationGet };
