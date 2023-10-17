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

export const StepWrapper = ({ res }) => {
  return (
    <StepsWrapper>
      <Step01 plan1={res.plan1} />
      <Step02 plan2={res.plan2} />
      <Step03 plan3={res.plan3} plan4={res.plan4} />
    </StepsWrapper>
  );
};
