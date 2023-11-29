import React, { useState } from 'react';
import * as St from '../style';
import { FaCommentDots } from 'react-icons/fa';
import useMyPageToggle from '../../../hooks/useMyPageToggle';
import useInputValue from '../../../hooks/useInputValue';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { postComments, getComments } from '../../../apis/api/comments';
import { useParams } from 'react-router';
import EachComment from './EachComment';

const Comment = () => {
  const [showToggle, onClickShowToggleHandler] = useMyPageToggle();
  const [addCommentValue, onChangeCommentValueHandler] = useInputValue();
  // const [currentComment, setCurrentComment] = useState([]);
  const [addComment, setAddComment] = useState('');
  // const [commentModifyToggle, onClickCommentModifyHandler] = useMyPageToggle();
  const [commentModify, onChangeCommentModifyHandler] = useInputValue();

  //Id값 조회
  const param = useParams();
  const goodsId = param.goodsId;

  //코멘트 조회
  const { data, isSuccess } = useQuery('getComments', () => getComments(goodsId));
  console.log(data);
  const currentComments = isSuccess && data?.commentList;
  console.log('currentComments', currentComments);

  //코멘트 추가
  const queryClient = useQueryClient();
  const postCommentsMutation = useMutation(postComments, {
    onSuccess: () => {
      queryClient.invalidateQueries('getComments');
    },
  });

  const onClickAddCommentHandler = goodsId => {
    setAddComment(addCommentValue);
    const content = addComment;
    postCommentsMutation.mutate({ goodsId, content });
  };

  // console.log(postCommentsMutation);
  // useEffect(() => {
  //   postCommentsMutation.status === 'success' ? alert('댓글등록성공!') : null;
  // }, [postCommentsMutation.status]);

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

          {isSuccess && showToggle && (
            <>
              <St.SellItemDivFlex>
                <textarea style={{ width: '500px' }} value={addCommentValue} onChange={onChangeCommentValueHandler} />
                {/* onClickAddCommentHandler에 goodsId 전달하기 */}
                <St.SellItemCommentModify $color={'red'} onClick={onClickAddCommentHandler}>
                  댓글 추가
                </St.SellItemCommentModify>
              </St.SellItemDivFlex>

              <St.CommentDiv>
                {isSuccess &&
                  currentComments?.map(item => {
                    return <EachComment item={item} param={param} />;
                  })}
              </St.CommentDiv>

              {/* <EachComment
                isSuccess={isSuccess}
                currentComments={currentComments}
                commentModify={commentModify}
                onChangeCommentModifyHandler={onChangeCommentModifyHandler}
              ></EachComment> */}
            </>
          )}
        </St.SellItemContentInfoDiv>
      </St.SellItemContentDiv>
    </St.SellItemContainerDiv>
  );
};

export default Comment;
