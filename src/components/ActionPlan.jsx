import React from "react";
import { ContentWrapper } from "./ContentWrapper";
import { TitleWrapper } from "./TitleWrapper";
import styled from "styled-components";

const StyledPlan = styled.div`
  align-items: flex-start;
  background-color: #ffffff;
  display: inline-flex;
  gap: 10px;
  min-height: 2586px;
  min-width: 1000px;
  padding: 100px 64px;
  position: relative;
  width: 100%;

  & .div-2 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 54px;
    position: relative;
  }
`;

const Plan = () => {
  return (
    <StyledPlan>
      <div className="div-2">
        <TitleWrapper />
        <ContentWrapper />
      </div>
    </StyledPlan>
  );
};

export default Plan;
