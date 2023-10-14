import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  align-items: center;
  border: 1px solid;
  border-color: #ccc9c5;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 16px 20px;
  position: relative;
  width: 449px;

  & .label {
    color: var(--material-themerefneutralneutral6);
    font-family: var(--label-l4-m-font-family);
    font-size: var(--label-l4-m-font-size);
    font-style: var(--label-l4-m-font-style);
    font-weight: var(--label-l4-m-font-weight);
    letter-spacing: var(--label-l4-m-letter-spacing);
    line-height: var(--label-l4-m-line-height);
    margin-top: -1px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }
`;

export const Button = () => {
  return (
    <StyledButton>
      <div className="label">임대 플랜 다시 받기</div>
    </StyledButton>
  );
};
