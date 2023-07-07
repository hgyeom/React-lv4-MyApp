import React from "react";
import * as S from "./Styeld.Header";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <S.StHeader>
      <S.StLink to="/">
        <h1>Graffiti</h1>
      </S.StLink>
      <Button
        height="30px"
        width="60px"
        border_radius="10px"
        border="1px solid #e1e1e1"
        background_color="white"
        onClick={() => navigate("/write")}
      >
        글 작성
      </Button>
    </S.StHeader>
  );
}

export default Header;
