import { Content } from "./Content";
import styled from "styled-components";
import { sizing } from "../../util";

const StyledStep = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${sizing(20)};
`;

const Timeline = styled.div`
  display: flex;
  padding-top: ${sizing(4)};
  flex-direction: column;
  align-items: center;
  gap: ${sizing(-4)};
  align-self: stretch;

  & .head {
    stroke-width: ${sizing(4)};
    stroke: var(--material-theme-key-colors-primary, #ffb261);
    width: ${sizing(24)};
    height: ${sizing(24)};
  }

  & .trail {
    width: ${sizing(2)};
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
