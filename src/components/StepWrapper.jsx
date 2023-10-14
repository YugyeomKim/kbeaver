import React from "react";
import styled from "styled-components";
import { Step01 } from "./Steps/Step01";
import { Step02 } from "./Steps/Step02";
import { Step03 } from "./Steps/Step03";

const StyledStepWrapperScreen = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

export const StepWrapper = () => {
  return (
    <StyledStepWrapperScreen>
      <div>step</div>
      <Step01 />
      <Step02 />
      <Step03 />
    </StyledStepWrapperScreen>
  );
};
