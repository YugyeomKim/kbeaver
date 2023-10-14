import React from "react";
import { StepWrapper } from "./StepWrapper";
import { Button } from "./Button";
import styled from "styled-components";

const StyledContentScreen = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  position: relative;

  & .button-2 {
    all: unset;
    align-items: center;
    border: 1px solid;
    border-color: #ccc9c5;
    border-radius: 12px;
    box-sizing: border-box;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    padding: 16px 20px;
    position: relative;
    width: 449px;
  }

  & .label-4 {
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

export const ContentWrapper = () => {
  return (
    <StyledContentScreen>
      <StepWrapper />
      <Button />
    </StyledContentScreen>
  );
};
