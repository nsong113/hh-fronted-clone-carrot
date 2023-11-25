import React, { useState } from 'react';

const useMyPageToggle = () => {
  //토글버튼
  const [toggle, setToggle] = useState(false);

  //handler
  const handler = () => {
    setToggle(!toggle);
  };
  return [toggle, handler];
};

export default useMyPageToggle;
