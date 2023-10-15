import styled from "styled-components";
import { sizing } from "../util";
import Button from "./Button";

const Backgroud = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${sizing(1000)};
  height: 100vh;

  background: #000000;
  opacity: 0.6;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${sizing(12)};
  padding: ${sizing(40)};
  width: ${sizing(792)};
  height: ${sizing(720)};

  background: #ffffff;
  opacity: initial;

  color: #120d09;
  font-family: Pretendard;
  font-size: ${sizing(26)};
  font-style: normal;
  font-weight: 600;
  line-height: ${sizing(40)}; /* 153.846% */
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: ${sizing(792)};
  height: ${sizing(40)};
`;

const InquireButton = styled(Button)`
  width: ${sizing(449)};
  background: #ffb261;
  color: #000;

  text-align: center;
  font-family: Pretendard;
  font-size: ${sizing(26)};
  font-style: normal;
  font-weight: 600;
  line-height: ${sizing(40)}; /* 153.846% */
`;

export default function InquireForm() {
  return (
    <>
      <Backgroud />
      <Container>
        <TopBar>
          <div>부동산에 문의하기</div>
          <div>X</div>
        </TopBar>
        <InquireButton>문의하기</InquireButton>
      </Container>
    </>
  );
}
