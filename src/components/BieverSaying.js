import styled from "styled-components";
import { sizing } from "../util";
import BeiverIcon from "../assets/cute_beaver_icon.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(12)};
`;

const BieverProfile = styled.div`
  display: flex;
  align-items: center;
  gap: ${sizing(12)};

  /* label / l3-SB */
  font-family: Pretendard;
  font-size: ${sizing(16)};
  font-style: normal;
  font-weight: 600;
  line-height: ${sizing(24)}; /* 150% */
`;

const BieverPF = styled.img`
  width: ${sizing(32)};
  height: ${sizing(32)};
`;
const BieverBubble = styled.div`
  display: flex;
  width: ${sizing(824)};
  padding: ${sizing(20)} ${sizing(24)};
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(20)};

  border-radius: ${sizing(0)} ${sizing(12)} ${sizing(12)} ${sizing(12)};
  background: #fff4eb;

  color: #1b1918;

  /* label / l3-M */
  font-family: Pretendard;
  font-size: ${sizing(16)};
  font-style: normal;
  font-weight: 500;
  line-height: ${sizing(24)}; /* 150% */
`;

export default function BieverSaying({ children, ...rest }) {
  return (
    <Container>
      <BieverProfile>
        <BieverPF src={BeiverIcon} />집 구하기 도사 비버
      </BieverProfile>
      <BieverBubble>{children}</BieverBubble>
    </Container>
  );
}
