import React, { useState } from 'react';

const useInputValue = () => {
  //state
  const [value, setValue] = useState('');

  //handler
  const handler = e => {
    setValue(e.target.value);
  };
  return [value, handler];
};

export default useInputValue;
