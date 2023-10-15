import React from "react";
import { ContentWrapper } from "./ContentWrapper";
import { TitleWrapper } from "./TitleWrapper";
import styled from "styled-components";

const StyledPlan = styled.div`
  display: inline-flex;
  padding: 100px 64px;
  align-items: flex-start;
  gap: 10px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.3);

  & .plan {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 54px;
  }
`;

const Plan = () => {
  return (
    <StyledPlan>
      <div className="plan">
        <TitleWrapper />
        <ContentWrapper />
      </div>
    </StyledPlan>
  );
};

export default Plan;
