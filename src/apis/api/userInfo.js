import axios from 'axios';

const signupPost = async newUser => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}`, newUser);

    console.log(res);
  } catch (error) {
    console.log('signup error', error);
  }
};

const loginPost = async loginUser => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}`, loginUser);
  } catch (error) {
    console.log('loginPost error', error);
  }
};

export { signupPost, loginPost };
