import React from "react";
import { StepWrapper } from "./StepWrapper";
import { Button } from "./ReButton";
import styled from "styled-components";

const StyledContentScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = ({ res }) => {
  return (
    <StyledContentScreen>
      <StepWrapper res={res} />
      <Button />
    </StyledContentScreen>
  );
};
