import React from "react";
import styled from "styled-components";
import { Step01 } from "./Steps/Step01";
import { Step02 } from "./Steps/Step02";
import { Step03 } from "./Steps/Step03";

const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: -8px;
`;

export const StepWrapper = () => {
  return (
    <StepsWrapper>
      <Step01 />
      <Step02 />
      <Step03 />
    </StepsWrapper>
  );
};
