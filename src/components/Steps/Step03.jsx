import { Content } from "./Content";
import styled from "styled-components";

const StyledStep = styled.div`
  align-items: flex-start;
  display: inline-flex;
  gap: 20px;
  position: relative;

  & .timeline {
    align-items: center;
    align-self: stretch;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    padding: 4px 0px 0px;
    position: relative;
  }

  & .head {
    border: 4px solid;
    border-color: var(--material-themekey-colorsprimary);
    border-radius: 12px;
    height: 24px;
    position: relative;
    width: 24px;
    z-index: 1;
  }

  & .trail {
    background-color: #d9d6d2;
    flex: 1;
    flex-grow: 1;
    margin-top: -4px;
    position: relative;
    width: 2px;
    z-index: 0;
  }
`;

export const Step03 = () => {
  return (
    <StyledStep>
      <div className="timeline">
        <div className="head" />
        <div className="trail" />
      </div>
      <Content />
    </StyledStep>
  );
};
