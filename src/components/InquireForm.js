import styled from "styled-components";
import { sizing } from "../util";
import Button from "./Button";
import cancelIcon from "../assets/icon-close.svg";
import dummyProfile from "../assets/dummyprofile.svg";

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
  gap: ${sizing(40)};

  background: #ffffff;
  opacity: initial;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${sizing(28)};
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: ${sizing(792)};
  height: ${sizing(40)};

  color: #120d09;
  font-family: Pretendard;
  font-size: ${sizing(26)};
  font-style: normal;
  font-weight: 600;
  line-height: ${sizing(40)}; /* 153.846% */
`;

const CancelButton = styled.button`
  background: transparent;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const CancelIcon = styled.img`
  width: ${sizing(40)};
  height: ${sizing(40)};
`;

const Products = styled.div`
  display: flex;
  width: ${sizing(792)};
  align-items: flex-start;
  gap: ${sizing(20)};
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${sizing(12)};
  border: ${sizing(1)} solid #ccc9c5;
  width: ${sizing(386)};

  & .image {
    border-radius: ${sizing(12)} ${sizing(0)} ${sizing(0)} ${sizing(12)};
    width: ${sizing(88)};
    height: ${sizing(88)};
  }

  & .contents {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${sizing(20)};
    width: ${sizing(258)};
    /* height: ${sizing(88)}; */

    & .information {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      & div {
        color: #17130e;

        /* label / l3-SB */
        font-family: Pretendard;
        font-size: ${sizing(16)};
        font-style: normal;
        font-weight: 500;
        line-height: ${sizing(24)}; /* 150% */
      }
    }
  }

  & .icon {
    width: ${sizing(20)};
    height: ${sizing(20)};
  }
`;

const TextArea = styled.div`
  width: ${sizing(752)};
  height: ${sizing(396)};
  padding: ${sizing(20)};

  border: ${sizing(1)} solid #e5e2de;
  border-radius: ${sizing(12)};

  color: #17130e;
  /* label / l3-M */
  font-family: Pretendard;
  font-size: ${sizing(16)};
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 150% */

  overflow-y: auto;
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
        <ContentContainer>
          <TopBar>
            <div>부동산에 문의하기</div>
            <CancelButton>
              <CancelIcon src={cancelIcon} />
            </CancelButton>
          </TopBar>
          <Products>
            <Product>
              <img className="image" alt="imageForBlah" src={dummyProfile} />
              <div className="contents">
                <div className="information">
                  <div>로얄부동산중개사무소</div>
                  <div>대표 박현정</div>
                </div>
                <img
                  className="arrow-forward-ios"
                  alt="Arrow forward ios"
                  src="arrow_forward_ios.png"
                />
              </div>
            </Product>
            <Product>
              <img className="image" alt="imageBlab" src={dummyProfile} />
              <div className="contents">
                <div className="information">
                  <div>전세 1억 2,000만</div>
                  <div>봉천동 1527-8 3층</div>
                </div>
                <img
                  className="arrow-forward-ios"
                  alt="Arrow forward ios"
                  src="arrow_forward_ios.png"
                />
              </div>
            </Product>
          </Products>
          <TextArea>
            안녕하세요, 저는 현재 서울시 중구 장충동에서 자취방을 찾고 있는데요.
            제가 원하는 조건은 보증금 5000만원에 월세 70만원입니다.  제가 찾는
            방의 크기나 구조에 대한 구체적인 요구사항은 없지만, 가격대와 위치를
            중심으로 검색하고 있습니다. 이 조건에 맞는 방이 현재 부동산에 매물로
            나와있는지 궁금합니다.  그리고 만약 있다면, 그 방의 상세한 정보를
            알려주실 수 있을까요? 예를 들어, 방의 크기와 구조, 어떤 가구들이
            이미 구비되어 있는지 등이요. 또한 해당 건물의 관리 상태도
            궁금합니다. 청소나 수리 등이 잘 이루어지고 있는 건지 알고
            싶습니다.  더불어 주변 환경에 대해서도 알려주실 수 있나요? 예를 들면
            대중교통 이용이 편리한 지역인지, 주변에 마트나 편의점 같은 생활
            시설들이 얼마나 가깝게 위치해 있는지 등입니다.  그 외에도 입주자로서
            알아야 할 사항이 있다면 그 정보도 부탁드립니다. 예를 들면 관리비나
            주차비 같은 추가적으로 발생할 수 있는 비용, 또는 건물 내에서 지켜야
            할 규정 등을 말씀해주시면 감사하겠습니다.  마지막으로 직접 방을 보러
            갈 수 있는 시간을 정하고 싶습니다. 가능한 날짜와 시간대를 알려주시면
            제 일정을 확인하여 연락드리겠습니다.  부동산 중개업무에 바쁘신
            와중에 제 문의사항 답변해 주셔서 감사합니다. 좋은 하루 되세요!
          </TextArea>
        </ContentContainer>
        <InquireButton>문의하기</InquireButton>
      </Container>
    </>
  );
}
