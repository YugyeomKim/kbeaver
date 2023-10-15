import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  width: 449px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #ccc9c5;

  & .label {
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);
    text-align: center;

    /* label / l4-M */
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 155.556% */
  }
`;

export const Button = () => {
  return (
    <StyledButton>
      <div className="label">임대 플랜 다시 받기</div>
    </StyledButton>
  );
};
