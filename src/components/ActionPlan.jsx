import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "./ContentWrapper";
import { TitleWrapper } from "./TitleWrapper";
import { sizing } from "../util";

const StyledPlan = styled.div`
  padding: ${sizing(100)} ${sizing(64)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(54)};
  width: ${sizing(872)};

  overflow-x: hidden;
  overflow-y: auto;
`;

const Plan = ({ res }) => {
  return (
    <StyledPlan>
      <TitleWrapper />
      <ContentWrapper res={res} />
    </StyledPlan>
  );
};

export default Plan;
