import React from 'react';
import SellItem from './detailCom/SellItem';
import SellList from './detailCom/SellList';
import Comment from './detailCom/Comment';

const DetailPage = () => {
  return (
    <>
      <SellItem />
      <Comment />
      <SellList />
    </>
  );
};

export default DetailPage;
