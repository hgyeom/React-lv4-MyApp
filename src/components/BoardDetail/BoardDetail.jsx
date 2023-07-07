import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./Styled.BoardDetail";
import Button from "../Button/Button";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deletePost, getPost } from "../../api/posts";
function BoardDetail() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery("posts", () => getPost(id));

  const mutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  const onClickDeleteButtonHandler = () => {
    const checkPassword = prompt("비밀번호를 입력해주세요.");
    if (checkPassword === data[0].password) {
      mutation.mutate(id);
      navigate("/");
    } else if (checkPassword !== null) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    } else {
      return;
    }
  };
  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }
  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }
  return (
    <S.StDetailContainer>
      <S.StDetailTitle>{data[0].title}</S.StDetailTitle>
      <S.StDetailWriter>{data[0].writer}</S.StDetailWriter>
      <S.StDetailContent>{data[0].contents}</S.StDetailContent>
      <S.StDetailButtonArea>
        <Button
          background_color="white"
          border="1px solid #cccccc"
          width="60px"
          height="30px"
          onClick={() => navigate(`/modify/${id}`, { state: data[0] })}
        >
          수정
        </Button>
        <Button
          background_color="white"
          border="1px solid #cccccc"
          width="60px"
          height="30px"
          onClick={onClickDeleteButtonHandler}
        >
          삭제
        </Button>
      </S.StDetailButtonArea>
    </S.StDetailContainer>
  );
}

export default BoardDetail;
