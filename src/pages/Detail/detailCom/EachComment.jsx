import React, { useState } from 'react';
import * as St from '../style';
import { useMutation, useQueryClient } from 'react-query';
import { deleteComments } from '../../../apis/api/comments';

const EachComment = ({ item, param }) => {
  // console.log('item', item);
  // const { comment, commentId } = item;

  //현재 인풋 값
  // const [inputValue, setInputValue] = useState(comment);

  //버튼을 눌렀을 때 true, false가 되는 토글
  const [modifiedComment, setModifiedComment] = useState(false);

  // 버튼을 누르는 아이템의 아이디를 저장 & 버튼을 누르면 true, false 변경됨
  // const [editCommentId, setEditCommentId] = useState();
  // const onClickCommentModifyHandler = id => {
  //   setEditCommentId(id);
  //   setModifiedComment(!modifiedComment);
  // };

  //코멘트 수정  -> 수정버튼 만들어놨는데,, 알고보니 수정 안하기로 함.. 근데 아까워서 그냥 둠...
  // const onClickPutCommentHandler = () => {};

  //코멘트 삭제
  const queryClient = useQueryClient();
  const deleteCommentMutation = useMutation(deleteComments, {
    onSuccess: () => {
      // queryClient.invalidateQueries()
    },
  });
  const onClickDeleteCommentHandler = commentId => {
    const goodsId = parseInt(param.goodsId);
    console.log('goodsId', goodsId);
    console.log('commentId', commentId);
    deleteCommentMutation.mutate({ goodsId, commentId });
  };

  return (
    <St.CommentInfoDiv key={item.commentId}>
      {/* 누른 아이디값과 전체중에 아이디 값이 같지 않으면 */}
      {/* 상황: true -> false일 때 p가 사라짐.    */}
      {/* false -> true 면 input이 나타남 */}
      {!modifiedComment && <St.SellItemContentContentP>{item.comment}</St.SellItemContentContentP>}

      {/* {!modifiedComment && editCommentId !== item.commentId && (
        <St.SellItemContentContentP>{item.comment}</St.SellItemContentContentP>
      )} */}

      {/* 토글이 true이고 누른 아이디 값과 전체중에 아이디 값이 같으면 */}
      {/* true-> false : 나타남 */}
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

        <St.SellItemModify $color={'#999'} onClick={() => onClickDeleteCommentHandler(item.commentId)}>
          삭제
        </St.SellItemModify>
      </St.CommentModifyBoxDiv>
    </St.CommentInfoDiv>
    // <St.CommentDiv>
    //   {isSuccess &&
    //     currentComments?.map(item => {
    //       console.log(typeof item.commentId);
    //       console.log(typeof editCommentId);
    //       return (
    //         <St.CommentInfoDiv key={item.commentId}>
    //           {editCommentId !== item.commentId && (
    //             <St.SellItemContentContentP>{item.comment}</St.SellItemContentContentP>
    //           )}

    //           {modifiedComment && editCommentId === item.commentId && (
    //             <input type="text" value={commentModify} onChange={onChangeCommentModifyHandler} />
    //           )}

    //           <St.CommentModifyBoxDiv>
    //             <St.SellItemModify $color={'red'} onClick={() => onClickCommentModifyHandler(item.commentId)}>
    //               수정
    //             </St.SellItemModify>
    //             <St.SellItemModify $color={'#999'}>삭제</St.SellItemModify>
    //           </St.CommentModifyBoxDiv>
    //         </St.CommentInfoDiv>
    //       );
    //     })}
    // </St.CommentDiv>
  );
};

export default EachComment;
