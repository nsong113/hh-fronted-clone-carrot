import axios from 'axios';
import React from 'react';

const signupPost = async newUser => {
  try {
    const res = await axios.post(
      `https://port-0-hangdang-back-3szcb0g2blp9q5y23.sel5.cloudtype.app/api/signup`,
      newUser,
    );

    console.log(res);
  } catch (error) {
    console.log('signup error', error);
  }
};

const loginPost = async loginUser => {
  try {
    const res = await axios.post(
      `https://port-0-hangdang-back-3szcb0g2blp9q5y23.sel5.cloudtype.app/api/signup`,
      loginUser,
    );
  } catch (error) {
    console.log('loginPost error', error);
  }
};

export { signupPost, loginPost };
