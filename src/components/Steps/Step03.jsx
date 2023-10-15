import { Content } from "./Content";
import styled from "styled-components";

const StyledStep = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const Timeline = styled.div`
  display: flex;
  padding-top: 4px;
  flex-direction: column;
  align-items: center;
  gap: -4px;
  align-self: stretch;

  & .head {
    stroke-width: 4px;
    stroke: var(--material-theme-key-colors-primary, #ffb261);
    width: 24px;
    height: 24px;
  }

  & .trail {
    width: 2px;
    flex: 1 0 0;
    background: #d9d6d2;
  }
`;

export const Step03 = () => {
  return (
    <StyledStep>
      <Timeline>
        <div className="head">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="10" stroke="#FFB261" stroke-width="4" />
          </svg>
        </div>
        <div className="trail" />
      </Timeline>
      <Content />
    </StyledStep>
  );
};
