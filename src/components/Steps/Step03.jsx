import { Content } from "./Content";
import styled from "styled-components";
import { sizing } from "../../util";
import headIcon from "../../assets/head.svg";

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

const Head = styled.img`
  width: ${sizing(24)};
  height: ${sizing(24)};
`;

export const Step03 = (plan3, plan4) => {
  return (
    <StyledStep>
      <Timeline>
        <div className="head">
          <Head src={headIcon} />
        </div>
        <div className="trail" />
      </Timeline>
      <Content plan3={plan3} plan4={plan4} />
    </StyledStep>
  );
};
