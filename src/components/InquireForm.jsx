import styled from "styled-components";
import { sizing } from "../util";
import Button from "./Button";
import cancelIcon from "../assets/icon-close.svg";
import dummyProfile from "../assets/dummyprofile.svg";

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  width: ${sizing(1000)};
  height: 100vh;

  background: rgba(0, 0, 0, 0.6);

  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: ${sizing(12)};
  padding: ${sizing(40)};
  width: ${sizing(792)};
  height: ${sizing(720)};
  gap: ${sizing(40)};

  background: #ffffff;
  opacity: initial;

  z-index: 2;
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

export default function InquireForm({ properties }) {
  return (
    <Background>
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
                  <div>{properties.agent_name}</div>
                  <div>{properties.agent_boss}</div>
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
                  <div>{properties.price}</div>
                  <div>{properties.location}</div>
                </div>
                <img
                  className="arrow-forward-ios"
                  alt="Arrow forward ios"
                  src="arrow_forward_ios.png"
                />
              </div>
            </Product>
          </Products>
          <TextArea>{properties.comment}</TextArea>
        </ContentContainer>
        <InquireButton>문의하기</InquireButton>
      </Container>
    </Background>
  );
}
