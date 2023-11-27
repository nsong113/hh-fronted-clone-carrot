import React, { useState } from 'react';
import * as St from '../style';
import { FaCommentDots } from 'react-icons/fa';
import useMyPageToggle from '../../../hooks/useMyPageToggle';
import useInputValue from '../../../hooks/useInputValue';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { postComments, getComments } from '../../../apis/api/comments';

const Comment = () => {
  const [showToggle, onClickShowToggleHandler] = useMyPageToggle();
  const [commentValue, onChangeCommentValueHandler] = useInputValue();
  const [addComment, setAddComment] = useState('');

  //코멘트 조회
  //조회를 할 떄 id값을 url에 넣어야 함.
  //1. 함수 안에서 useQuery를 쓸 수 없다. 밖에서 id값을 받아야 한다... 이 부분 생각하기
  // const { data } = useQuery('getComments', () => getComments(id));
  // const onClickGetCommentHandler = id => {
  //   console.log(data);
  // };

  //코멘트 추가
  const queryClient = useQueryClient();
  const postCommentsMutation = useMutation(postComments, {
    onSuccess: () => {
      // queryClient.invalidateQueries('')
    },
  });
  const onClickAddCommentHandler = id => {
    // goodsId값 아직 전달 못받음, 나중에 goodsId로 변경하기
    const content = addComment;
    postCommentsMutation.mutate({ id, content });
  };

  //코멘트 수정

  //코멘트 삭제

  return (
    <St.SellItemContainerDiv>
      <St.SellItemContentDiv>
        <St.SellItemContentInfoDiv>
          <St.SellItemDivFlex>
            <St.SellItemContentTitleH2
              onClick={() => {
                onClickShowToggleHandler();
                // onClickGetCommentHandler();
              }}
            >
              <FaCommentDots /> 눌러서 댓글 보기!
            </St.SellItemContentTitleH2>
            <St.SellItemModifyBox></St.SellItemModifyBox>
          </St.SellItemDivFlex>

          {showToggle && (
            <>
              <St.SellItemDivFlex>
                <textarea style={{ width: '500px' }} value={commentValue} onChange={onChangeCommentValueHandler} />
                {/* onClickAddCommentHandler에 goodsId 전달하기 */}
                <St.SellItemCommentModify $color={'red'} onClick={onClickAddCommentHandler}>
                  댓글 추가
                </St.SellItemCommentModify>
              </St.SellItemDivFlex>
              <St.CommentDiv>
                <St.CommentInfoDiv>
                  <St.SellItemContentContentP>에누리 되나요?</St.SellItemContentContentP>
                  <St.CommentModifyBoxDiv>
                    <St.SellItemModify $color={'red'}>수정</St.SellItemModify>
                    <St.SellItemModify $color={'#999'}>삭제</St.SellItemModify>
                  </St.CommentModifyBoxDiv>
                </St.CommentInfoDiv>
              </St.CommentDiv>
            </>
          )}
        </St.SellItemContentInfoDiv>
      </St.SellItemContentDiv>
    </St.SellItemContainerDiv>
  );
};

export default Comment;
