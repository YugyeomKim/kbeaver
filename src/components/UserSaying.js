import styled from "styled-components";
import { sizing } from "../util";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  width: ${sizing(936)};
  padding-right: ${sizing(64)};
  gap: ${sizing(12)};
`;

const UserBubble = styled.div`
  display: flex;
  padding: ${sizing(20)} ${sizing(24)};
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(20)};

  border-radius: ${sizing(12)} ${sizing(0)} ${sizing(12)} ${sizing(12)};
  background: #ffb261;

  color: #1b1918;

  /* label / l3-M */
  font-family: Pretendard;
  font-size: ${sizing(16)};
  font-style: normal;
  font-weight: 500;
  line-height: ${sizing(24)}; /* 150% */
`;

export default function UserSaying({ children, ...rest }) {
  return (
    <Container>
      <UserBubble>{children}</UserBubble>
    </Container>
  );
}
