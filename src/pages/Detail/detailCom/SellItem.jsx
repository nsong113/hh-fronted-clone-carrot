import React from 'react';
import * as St from '../style';
import { RiBearSmileFill } from 'react-icons/ri';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import useMyPageToggle from '../../../hooks/useMyPageToggle';
import { useNavigate, useParams } from 'react-router';
import { useMutation, useQuery } from 'react-query';
import { getGoods } from '../../../apis/api/goods';
import { addLikeCount, deleteLikeCount } from '../../../apis/api/comments';

const SellItem = () => {
  const navigate = useNavigate();
  const param = useParams();
  // console.log('param', param.goodsId);

  //전체 goods 조회
  const { data: items } = useQuery('getGoods', getGoods);

  //좋아요 토글
  const [likeToggle, onClickLikeToggleHandler] = useMyPageToggle();

  //좋아요 post 요청
  const addLikeCountMutation = useMutation(addLikeCount);
  const onClickPostLikeHandler = () => {
    addLikeCountMutation.mutate(parseInt(param.goodsId));
  };

  //좋아요 delete 요청
  const deleteLikeCountMutation = useMutation(deleteLikeCount);
  const onClickDeleteLikeHandler = () => {
    deleteLikeCountMutation.mutate(parseInt(param.goodsId));
  };

  //전체 goods에서 선택한 아이템 필터링
  const foundData = items?.find(a => a.id === parseInt(param.goodsId));

  ///이전, 다음 버튼 눌렀을 때 나올 아이들
  const minItems = items?.filter(a => a.id < foundData.id);
  const maxItems = items?.filter(a => a.id > foundData.id);

  const prevPage = minItems?.reverse()[0]?.id;
  const nextPage = maxItems && maxItems[0]?.id;

  // const prev = prevPage ?? items?[items?.length - 1]?.id;
  // const next = nextPage ?? items?[0]?.id;

  //nullish coalescing operator
  // const result = a ?? b;
  //a에 값이 있다면 a를 할당 없다면 b를 할당

  //좌, 우 페이지네이션
  const onClickPrevNavigateHandler = () => {
    prevPage ? navigate(`/detail/${parseInt(prevPage)}`) : alert('더 이상 상품이 존재하지 않습니다.');
  };
  const onClickNextNavigateHandler = () => {
    //전체 배열에서의 인덱스 ..
    ///다음 배열 인덱스의 아이디...
    //첫 페이지와 마지막 페이지 예외처리 :
    nextPage ? navigate(`/detail/${parseInt(nextPage)}`) : alert('더 이상 상품이 존재하지 않습니다. ');
  };

  return (
    <St.SellItemContainerDiv>
      <St.SellItemArrowFlex>
        <IoIosArrowBack style={arrowStyle} onClick={onClickPrevNavigateHandler} />
        <St.SellItemLikeBtn>
          {likeToggle && (
            <FcLikePlaceholder
              style={likeStyle}
              onClick={() => {
                onClickLikeToggleHandler();
                onClickPostLikeHandler();
              }}
            />
          )}

          {!likeToggle && (
            <FcLike
              style={likeStyle}
              onClick={() => {
                onClickLikeToggleHandler();
                onClickDeleteLikeHandler();
              }}
            />
          )}
          <St.SellItemStatusDiv>좋아요</St.SellItemStatusDiv>
        </St.SellItemLikeBtn>
        <IoIosArrowForward style={arrowStyle} onClick={onClickNextNavigateHandler} />
      </St.SellItemArrowFlex>
      <>
        <St.SellItemImgDiv></St.SellItemImgDiv>
        <St.SellItemInfoDiv>
          <St.SellItemUserInfoDiv>
            <St.SellItemUserNameDiv>shinny</St.SellItemUserNameDiv>
            <St.SellItemUserAddDiv>{foundData?.wishLocation}</St.SellItemUserAddDiv>
          </St.SellItemUserInfoDiv>

          <St.SellItemTempDiv>
            <St.SellItemTempFlex>
              <div className="SellItemTempNumDiv">
                <St.SellItemTempNumP>36.7 ℃</St.SellItemTempNumP>
                <St.SellItemTempBarDiv>
                  <St.SellItemTempGreyDiv></St.SellItemTempGreyDiv>
                  <St.SellItemBlueDiv></St.SellItemBlueDiv>
                </St.SellItemTempBarDiv>
              </div>

              <div className="SellItemTempFaceDiv">
                <RiBearSmileFill style={{ fontSize: '30px', color: '#1561a9' }} />
              </div>
            </St.SellItemTempFlex>
            <St.SellItemTempFaceDiv>매너온도</St.SellItemTempFaceDiv>
          </St.SellItemTempDiv>
        </St.SellItemInfoDiv>
        <St.SellItemContentDiv>
          <St.SellItemContentInfoDiv>
            <St.SellItemDivFlex>
              <St.SellItemContentTitleH2>{foundData?.goodsTitle}</St.SellItemContentTitleH2>
              <St.SellItemModifyBox>
                <St.SellItemModify $color={'red'}>수정</St.SellItemModify>
                <St.SellItemModify $color={'#999'}>삭제</St.SellItemModify>
              </St.SellItemModifyBox>
            </St.SellItemDivFlex>
            <St.SellItemContentHourP>15시간 전</St.SellItemContentHourP>
            <St.SellItemContentPriceP>{foundData?.price}원</St.SellItemContentPriceP>
            <St.SellItemContentContentP>{foundData?.contents}</St.SellItemContentContentP>
          </St.SellItemContentInfoDiv>
          <St.SellItemLikeFlexDiv>
            <St.SellItemLikeDiv>관심 {foundData?.likeCount}</St.SellItemLikeDiv>
            <St.SellItemLikeDiv> 채팅 20</St.SellItemLikeDiv>
            <St.SellItemLikeDiv>조회 942</St.SellItemLikeDiv>
          </St.SellItemLikeFlexDiv>
        </St.SellItemContentDiv>
      </>
    </St.SellItemContainerDiv>
  );
};

export default SellItem;

//style
const likeStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  fontSize: '30px',
};
const arrowStyle = {
  fontSize: '60px',
  cursor: 'pointer',
};
