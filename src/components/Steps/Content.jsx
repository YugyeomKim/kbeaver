import styled from "styled-components";
import { useState } from "react";
import Modal from "../InquireForm";
import { sizing } from "../../util";

const StyledContent = styled.div`
  display: flex;
  padding-bottom: ${sizing(108)};
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(48)};
`;

const Title = styled.div`
  display: flex;
  width: ${sizing(828)};
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(12)};

  & .title {
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);

    /* title / t5-B */
    font-family: Pretendard;
    font-size: ${sizing(20)};
    font-style: normal;
    font-weight: 700;
    line-height: ${sizing(32)}; /* 160% */
  }

  & .description {
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);

    /* label / l3-M */
    font-family: Pretendard;
    font-size: ${sizing(16)};
    font-style: normal;
    font-weight: 500;
    line-height: ${sizing(24)}; /* 150% */
  }
`;

const Beaver = styled.div`
  display: flex;
  width: ${sizing(828)};
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(12)};
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: ${sizing(12)};

  & .beaver {
    display: flex;
    width: ${sizing(32)};
    height: ${sizing(32)};
    padding: ${sizing(6)} ${sizing(4)} ${sizing(6)} ${sizing(5)};
    justify-content: center;
    align-items: center;
  }

  & .bot-name {
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);

    /* label / l3-SB */
    font-family: Pretendard;
    font-size: ${sizing(16)};
    font-style: normal;
    font-weight: 600;
    line-height: ${sizing(24)}; /* 150% */
  }
`;

const Comment = styled.div`
  display: flex;
  padding: ${sizing(20)} ${sizing(24)};
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(20)};
  align-self: stretch;
  border-radius: ${sizing(0)} ${sizing(12)} ${sizing(12)} ${sizing(12)};
  background: var(--material-theme-ref-secondary-secondary-96, #fff1e7);

  & .comment {
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);

    /* label / l3-M */
    font-family: Pretendard;
    font-size: ${sizing(16)};
    font-style: normal;
    font-weight: 500;
    line-height: ${sizing(24)}; /* 150% */

    white-space: pre-line;
    word-break: keep-all;
  }
`;

const StyledRow = styled.div`
  display: flex;
  width: ${sizing(828)};
  align-items: flex-start;
  gap: ${sizing(12)};
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;

const BuildingImg = styled.div`
  display: flex;
  width: ${sizing(408)};
  height: ${sizing(280)};
  justify-content: center;
  align-items: center;

  & .building-image {
    border-radius: ${sizing(12)} ${sizing(12)} ${sizing(0)} ${sizing(0)};
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    width: ${sizing(408)};
    height: ${sizing(305)};
    flex-shrink: 0;
  }
`;

const BuildingDetail = styled.div`
  display: flex;
  padding: ${sizing(16)} ${sizing(20)};
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: ${sizing(0)} ${sizing(0)} ${sizing(12)} ${sizing(12)};
  border: ${sizing(1)} solid #ccc9c5;
  background: #ffffff;
`;

const BuildingInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(2)};

  & .name {
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);
    font-family: Pretendard;
    font-size: ${sizing(18)};
    font-style: normal;
    font-weight: 700;
    line-height: ${sizing(28)}; /* 155.556% */
  }

  & .detail {
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);

    /* label / l3-M */
    font-family: Pretendard;
    font-size: ${sizing(16)};
    font-style: normal;
    font-weight: 500;
    line-height: ${sizing(24)}; /* 150% */
  }

  & .text {
    color: #17130e;
    font-family: var(--label-l3-m-font-family);
    font-size: var(--label-l3-m-font-size);
    font-style: var(--label-l3-m-font-style);
    font-weight: var(--label-l3-m-font-weight);
    letter-spacing: var(--label-l3-m-letter-spacing);
    line-height: var(--label-l3-m-line-height);
  }

  & .splitter {
    color: #e5e2de;
    font-family: var(--label-l3-m-font-family);
    font-size: var(--label-l3-m-font-size);
    font-style: var(--label-l3-m-font-style);
    font-weight: var(--label-l3-m-font-weight);
    letter-spacing: var(--label-l3-m-letter-spacing);
    line-height: var(--label-l3-m-line-height);
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${sizing(80)};
  height: ${sizing(40)};
  padding: ${sizing(8)} ${sizing(12)};
  border-radius: ${sizing(8)};
  border: none;

  background: #ffb261;

  cursor: pointer;

  & .inquiry-label {
    color: #17130e;

    /* label / l3-M */
    font-family: Pretendard;
    font-size: ${sizing(16)};
    font-style: normal;
    font-weight: 500;
    line-height: ${sizing(24)}; /* 150% */
  }
`;

export const Content = ({ plan3, plan4 }) => {
  const { comment, properties } = plan3;

  const imgUrl01 = properties[0].image;
  const imgUrl02 = properties[1].image;
  const imgUrl03 = properties[2].image;
  const imgUrl04 = properties[3].image;

  const [showModal, setShowModal] = useState([false, false, false, false]);

  const toggleModal = (idx) => {
    const newShowModal = [...showModal];
    newShowModal[idx] = !newShowModal[idx];
    setShowModal(newShowModal);
  };

  return (
    <StyledContent className="content">
      <Title>
        <div className="title">STEP 3. 매물 찾아보고 부동산에 문의하기</div>
        <div className="description">
          온라인으로 집의 사진, 가격, 위치 등을 확인하고 실제로 방문해볼 매물을
          몇 개 후보로 정했다면, 부동산 방문 문의를 하시는 것이 좋아요. 방문
          전에 문의하지 않으면 원하는 집을 보지 못할 확률이 높아요. 방문
          문의글은 비버가 수집한 정보를 바탕으로 자동 생성해 줄게요.
        </div>
      </Title>
      <Beaver>
        <Profile>
          <img className="beaver" alt="beaver" src="beaver.png" />
          <div className="bot-name">비버’s comment</div>
        </Profile>
        <Comment>
          <div className="comment">{comment}</div>
        </Comment>
      </Beaver>

      <StyledRow>
        <Product>
          <BuildingImg>
            <img className="building-image " alt="Building" src={imgUrl01} />
          </BuildingImg>

          <BuildingDetail>
            <BuildingInfo>
              <div className="name">{properties[0].price}</div>
              <div className="detail">
                <span className="text">{properties[0].location} </span>
                <span className="splitter">|</span>
                <span className="text"> 단독주택</span>
              </div>
            </BuildingInfo>

            <Button onClick={(e) => toggleModal(0)}>
              <div className="inquiry-label">문의하기</div>
            </Button>
          </BuildingDetail>
        </Product>

        <Product>
          <BuildingImg>
            <img className="building-image " alt="Building" src={imgUrl02} />
          </BuildingImg>

          <BuildingDetail>
            <BuildingInfo>
              <div className="name">{properties[1].price}</div>

              <div className="detail">
                <span className="text">{properties[1].location} </span>
                <span className="splitter">|</span>
                <span className="text"> 단독주택</span>
              </div>
            </BuildingInfo>

            <Button onClick={(e) => toggleModal(1)}>
              <div className="inquiry-label">문의하기</div>
            </Button>
          </BuildingDetail>
        </Product>
      </StyledRow>

      <StyledRow>
        <Product>
          <BuildingImg className="building-image">
            <img className="building-image " alt="Building" src={imgUrl03} />
          </BuildingImg>

          <BuildingDetail>
            <BuildingInfo>
              <div className="name">{properties[2].price}</div>
              <div className="detail">
                <span className="text">{properties[2].location} </span>
                <span className="splitter">|</span>
                <span className="text"> 단독주택</span>
              </div>
            </BuildingInfo>
            <Button onClick={(e) => toggleModal(2)}>
              <div className="inquiry-label">문의하기</div>
            </Button>
          </BuildingDetail>
        </Product>

        <Product>
          <BuildingImg>
            <img className="building-image" alt="Building" src={imgUrl04} />
          </BuildingImg>

          <BuildingDetail>
            <BuildingInfo>
              <div className="name">{properties[3].price}</div>
              <div className="detail">
                <span className="text">{properties[3].location} </span>
                <span className="splitter">|</span>
                <span className="text"> 단독주택</span>
              </div>
            </BuildingInfo>

            <Button onClick={(e) => toggleModal(3)}>
              <div className="inquiry-label">문의하기</div>
            </Button>
          </BuildingDetail>
        </Product>
      </StyledRow>
      {showModal[0] && (
        <Modal
          idx={0}
          onClose={toggleModal}
          property={properties[0]}
          comment={plan4.ask_comment}
        />
      )}
      {showModal[1] && (
        <Modal
          idx={1}
          onClose={toggleModal}
          property={properties[1]}
          comment={plan4.ask_comment}
        />
      )}
      {showModal[2] && (
        <Modal
          idx={2}
          onClose={toggleModal}
          property={properties[2]}
          comment={plan4.ask_comment}
        />
      )}
      {showModal[3] && (
        <Modal
          idx={3}
          onClose={toggleModal}
          property={properties[3]}
          comment={plan4.ask_comment}
        />
      )}
    </StyledContent>
  );
};
