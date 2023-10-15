import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
`;

const Title = styled.div`
  display: flex;
  width: 828px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  & .title {
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);

    /* title / t5-B */
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 160% */
  }

  & .description {
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);

    /* label / l3-M */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }
`;

const Beaver = styled.div`
  display: flex;
  width: 828px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & .beaver {
    display: flex;
    width: 32px;
    height: 32px;
    padding: 6px 4px 6px 5px;
    justify-content: center;
    align-items: center;
  }

  & .bot-name {
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);

    /* label / l3-SB */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
  }
`;

const Comment = styled.div`
  display: flex;
  padding: 20px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  border-radius: 0px 12px 12px 12px;
  background: var(--material-theme-ref-secondary-secondary-96, #fff1e7);

  & .comment {
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);

    /* label / l3-M */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }
`;

const StyledRow = styled.div`
  display: flex;
  width: 828px;
  align-items: flex-start;
  gap: 12px;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;

const BuildingImg = styled.div`
  display: flex;
  width: 408px;
  height: 280px;
  justify-content: center;
  align-items: center;
  border-radius: 12px 12px 0px 0px;
  border-top: 1px solid #ccc9c5;
  border-right: 1px solid #ccc9c5;
  border-left: 1px solid #ccc9c5;

  & .building-image {
    width: 409px;
    height: 305px;
    flex-shrink: 0;
    background: url(https://github.com/Syncathon-SYEC/K-Beaver/blob/main/public/image%2016.png),
      lightgray 50% / cover no-repeat;
  }
`;

const BuildingDetail = styled.div`
  display: flex;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 0px 0px 12px 12px;
  border: 1px solid #ccc9c5;
`;

const BuildingInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;

  & .name {
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 155.556% */
  }

  & .detail {
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);

    /* label / l3-M */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
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

const Button = styled.div`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  border-radius: 8px;
  background: var(--material-theme-key-colors-primary, #ffb261);

  & .inquiry-button {
    all: unset;
    align-items: flex-start;
    background-color: var(--material-themekey-colorsprimary);
    border-radius: 8px;
    box-sizing: border-box;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 2px;
    padding: 8px 12px;
    position: relative;
  }

  & .inquiry-label {
    color: var(--material-themerefneutralneutral6);
    font-family: var(--label-l3-m-font-family);
    font-size: var(--label-l3-m-font-size);
    font-style: var(--label-l3-m-font-style);
    font-weight: var(--label-l3-m-font-weight);
    letter-spacing: var(--label-l3-m-letter-spacing);
    line-height: var(--label-l3-m-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
`;

export const Content = () => {
  return (
    <StyledContent className="content">
      <Title>
        <p className="title">STEP 3. 매물 찾아보고 부동산에 문의하기</p>
        <p className="description">
          온라인으로 집의 사진, 가격, 위치 등을 확인하고 실제로 방문해볼 매물을
          몇 개 후보로 정했다면, 부동산 방문 문의를 하시는 것이 좋아요. 방문
          전에 문의하지 않으면 원하는 집을 보지 못할 확률이 높아요. 방문
          문의글은 비버가 수집한 정보를 바탕으로 자동 생성해 줄게요.
        </p>
      </Title>
      <Beaver>
        <Profile>
          <img className="beaver" alt="beaver" src="beaver.png" />
          <div className="bot-name">비버’s comment</div>
        </Profile>
        <Comment>
          <p className="comment">
            질문에 해주신 답변을 토대로 사용자님이 관심 가질 수 있는 매물 몇
            개를 찾아왔어요. 만약 실제로 방문해 보고 싶은 매물이 있다면
            '문의하기' 버튼을 클릭해보세요. 비버가 대신 문의글을 작성해드릴게요.
            작성된 글을 검토하시고 바로 중개사무소에 문의해보세요!
          </p>
        </Comment>
      </Beaver>

      <StyledRow>
        <Product>
          <BuildingImg>
            <img
              className="building-image "
              alt="Building"
              src="image 16.png"
            />
          </BuildingImg>

          <BuildingDetail>
            <BuildingInfo>
              <div className="name">전세 1억 5,000만</div>
              <p className="detail">
                <span className="text">봉전동 1522-3 3층 </span>
                <span className="splitter">|</span>
                <span className="text"> 단독주택</span>
              </p>
            </BuildingInfo>

            <Button>
              <button className="inquiry-button">
                <div className="inquiry-label">문의하기</div>
              </button>
            </Button>
          </BuildingDetail>
        </Product>

        <Product>
          <BuildingImg>
            <img
              className="building-image "
              alt="Building"
              src="image 17.png"
            />
          </BuildingImg>

          <BuildingDetail>
            <BuildingInfo>
              <div className="name">전세 1억 6,000만</div>

              <p className="detail">
                <span className="text">봉천동 1563-12 중간층 </span>
                <span className="splitter">|</span>
                <span className="text"> 단독주택</span>
              </p>
            </BuildingInfo>

            <Button>
              <button className="inquiry-button">
                <div className="inquiry-label">문의하기</div>
              </button>
            </Button>
          </BuildingDetail>
        </Product>
      </StyledRow>
    </StyledContent>
  );
};
