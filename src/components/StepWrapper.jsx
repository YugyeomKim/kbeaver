import React from "react";
import styled from "styled-components";
import { Step01 } from "./Steps/Step01";
import { Step02 } from "./Steps/Step02";
import { Step03 } from "./Steps/Step03";
import { sizing } from "../util";

const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(-8)};
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
