import React from "react";
import styled from "styled-components";
import { sizing } from "../util.js"

const StyledButton = styled.button`
  display: flex;
  width:  ${sizing(449)};
  padding:  ${sizing(16)}  ${sizing(20)};
  justify-content: center;
  align-items: center;
  border-radius:  ${sizing(12)};
  border:  ${sizing(1)} solid #ccc9c5;

  & .label {
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);
    text-align: center;

    /* label / l4-M */
    font-family: Pretendard;
    font-size:  ${sizing(18)};
    font-style: normal;
    font-weight: 500;
    line-height:  ${sizing(28)}; /* 155.556% */
  }
`;

export const Button = () => {
  return (
    <StyledButton>
      <div className="label">임대 플랜 다시 받기</div>
    </StyledButton>
  );
};
