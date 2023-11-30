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
      });
    }
    return res.status;
  } catch (error) {
    console.log('loginPost error', error);
  }
};

export { signupPost, loginPost };
