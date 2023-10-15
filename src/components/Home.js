import styled from "styled-components";
import { sizing } from "../util";
import Button from "./Button";

const Subtitle = styled.div`
  color: var(--gray-gray-900, #202225);
  text-align: center;
  font-family: Pretendard;
  font-size: ${sizing(32)};
  font-style: normal;
  font-weight: 500;
  /* line-height: 150%; */
`;

const Title = styled.div`
  color: var(--gray-gray-900, #202225);
  text-align: center;
  font-family: Pretendard;
  font-size: ${sizing(48)};
  font-style: normal;
  font-weight: 700;
  /* line-height: 125%; */
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${sizing(4)};
`;

const HomeImage = styled.img`
  width: ${sizing(233)};
  height: ${sizing(407)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: ${sizing(449)};
  height: ${sizing(811)};
`;

const StartButton = styled(Button)`
  width: ${sizing(449)};
  background: #FFB261;
  color: #000;

  text-align: center;
  font-family: Pretendard;
  font-size: ${sizing(26)};
  font-style: normal;
  font-weight: 600;
  line-height: ${sizing(40)}; /* 153.846% */
`;

export default function Home() {
  const start = (e) => {
    window.location.href = "/chat";
  };

  return (
    <Container>
      <TitleDiv>
        <Subtitle>매물 추천부터 부동산 문의까지</Subtitle>
        <Title>맞춤형 주택 임대 플래너</Title>
      </TitleDiv>
      <HomeImage src={require("../assets/cute_biever.png")} />
      <StartButton onClick={start}>시작하기</StartButton>
    </Container>
  );
}
