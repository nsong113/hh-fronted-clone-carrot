import React, { useState } from 'react';
import * as St from '../style';
import useMyPageToggle from '../../../hooks/useMyPageToggle';

const EachComment = ({ isSuccess, currentComments, commentModify, onChangeCommentModifyHandler }) => {
  //   const [commentModifyToggle, onClickCommentModifyHandler] = useMyPageToggle();

  //   console.log('currentComments', currentComments.commentId);
  const [modifiedComment, setModifiedComment] = useState(false);
  const [editCommentId, setEditCommentId] = useState('');

  const onClickCommentModifyHandler = id => {
    setEditCommentId(id);
    setModifiedComment(!modifiedComment);
    // if (id === currentComments[0].commentId) setModifiedComment(!modifiedComment);
  };

  //   console.log(commentModifyToggle);

  return (
    <St.CommentDiv>
      {isSuccess &&
        currentComments?.map(item => {
          return (
            <St.CommentInfoDiv key={item.commentId}>
              {!modifiedComment && <St.SellItemContentContentP>{item.comment}</St.SellItemContentContentP>}

              {modifiedComment && editCommentId === item.commentId && (
                <input type="text" value={commentModify} onChange={onChangeCommentModifyHandler} />
              )}
              <St.CommentModifyBoxDiv>
                <St.SellItemModify $color={'red'} onClick={() => onClickCommentModifyHandler(item.commentId)}>
                  수정
                </St.SellItemModify>
                <St.SellItemModify $color={'#999'}>삭제</St.SellItemModify>
              </St.CommentModifyBoxDiv>
            </St.CommentInfoDiv>
          );
        })}
    </St.CommentDiv>
  );
};

export default EachComment;
