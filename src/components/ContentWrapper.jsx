import React from "react";
import { StepWrapper } from "./StepWrapper";
import { Button } from "./Button";
import styled from "styled-components";

const StyledContentScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = () => {
  return (
    <StyledContentScreen>
      <StepWrapper />
      <Button />
    </StyledContentScreen>
  );
};
