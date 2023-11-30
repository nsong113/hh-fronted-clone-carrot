import React, { useState } from 'react';
import * as St from '../style';
import { useMutation, useQueryClient } from 'react-query';
import { deleteComments } from '../../../apis/api/comments';

const EachComment = ({ item, param }) => {
  //코멘트 수정 버튼 관련 코드 : 수정기능 만들었는데 알고보니까 그런 계획이 없었음 -> 아까워서 안지움
  // const [inputValue, setInputValue] = useState(comment);
  // const [editCommentId, setEditCommentId] = useState();
  // const onClickCommentModifyHandler = id => {
  //   setEditCommentId(id);
  //   setModifiedComment(!modifiedComment);
  // };
  // const onClickPutCommentHandler = () => {};
  //버튼을 눌렀을 때 true, false가 되는 토글
  // const [modifiedComment, setModifiedComment] = useState(false);

  //코멘트 삭제
  const queryClient = useQueryClient();
  const goodsId = parseInt(param.goodsId);
  const deleteCommentMutation = useMutation(deleteComments, {
    onSuccess: () => {
      queryClient.invalidateQueries('getComments');
    },
  });

  const onClickDeleteCommentHandler = commentId => {
    console.log('goodsId', goodsId);
    console.log('commentId', commentId);
    deleteCommentMutation.mutate({ goodsId, commentId });
  };

  return (
    <St.CommentInfoDiv key={item.id}>
      {<St.SellItemContentContentP>{item.content}</St.SellItemContentContentP>}

      {/* {!modifiedComment && editCommentId !== item.commentId && (
        <St.SellItemContentContentP>{item.comment}</St.SellItemContentContentP>
      )} */}
      {/* {modifiedComment && editCommentId === item.commentId && (
        <input
          type="text"
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
          }}
        />
      )} */}

      <St.CommentModifyBoxDiv>
        {/* {modifiedComment ? (
          <St.SellItemModify $color={'red'} onClick={() => onClickCommentModifyHandler(item.commentId)}>
            완료
          </St.SellItemModify>
        ) : (
          <St.SellItemModify
            $color={'red'}
            onClick={() => {
              onClickCommentModifyHandler(item.commentId);
              onClickPutCommentHandler();
            }}
          >
            수정
          </St.SellItemModify>
        )} */}

        <St.SellItemModify $color={'#999'} onClick={() => onClickDeleteCommentHandler(item.id)}>
          삭제
        </St.SellItemModify>
      </St.CommentModifyBoxDiv>
    </St.CommentInfoDiv>
  );
};

export default EachComment;
