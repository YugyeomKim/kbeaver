import styled from "styled-components";

const StyledStep = styled.div`
  align-items: flex-start;
  display: inline-flex;
  gap: 20px;
  position: relative;

  & .timeline {
    align-items: center;
    align-self: stretch;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    padding: 4px 0px 0px;
    position: relative;
  }

  & .head {
    border: 4px solid;
    border-color: var(--material-themekey-colorsprimary);
    border-radius: 12px;
    height: 24px;
    position: relative;
    width: 24px;
    z-index: 1;
  }

  & .trail {
    background-color: #d9d6d2;
    flex: 1;
    flex-grow: 1;
    margin-top: -4px;
    position: relative;
    width: 2px;
    z-index: 0;
  }

  & .content {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 48px;
    padding: 0px 0px 108px;
    position: relative;
  }

  & .design-component-instance-node {
    flex: 0 0 auto !important;
  }

  & .suggestion {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    position: relative;
  }

  & .keywords-container {
    align-items: center;
    border: 1px solid;
    border-color: #ccc9c5;
    border-radius: 12px;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    padding: 40px 20px;
    position: relative;
    width: 828px;
  }

  & .keyword-wrapper {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 12px;
    justify-content: center;
    position: relative;
  }

  & .keyword {
    align-items: flex-start;
    background-color: var(--material-themekey-colorsprimary);
    border-radius: 12px;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 2px;
    padding: 16px 20px;
    position: relative;
  }

  & .label {
    display: flex;
    padding: 16px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    border-radius: 12px;
    background: var(--material-theme-key-colors-primary, #ffb261);
  }
`;

const Title = styled.div`
  height: 32px;
  width: 381px;

  & .title {
    color: var(--material-themerefneutralneutral6);
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    left: 0;
    letter-spacing: 0;
    line-height: 32px;
    top: 0;
    white-space: nowrap;
  }
`;

const Description = styled.div`
  height: 72px;
  width: 828px;

  & .description {
    color: var(--material-themerefneutralneutral6);
    font-family: "Pretendard-Medium", Helvetica;
    font-size: 16px;
    font-weight: 500;
    left: 0;
    letter-spacing: 0;
    line-height: 24px;
    top: 0;
    width: 828px;
  }
`;

const Profile = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 12px;
  position: relative;

  & .beaver {
    height: 32px;
    position: relative;
    width: 32px;
  }

  & .bot-name {
    color: var(--material-themerefneutralneutral6);
    font-family: var(--label-l3-SB-font-family);
    font-size: var(--label-l3-SB-font-size);
    font-style: var(--label-l3-SB-font-style);
    font-weight: var(--label-l3-SB-font-weight);
    letter-spacing: var(--label-l3-SB-letter-spacing);
    line-height: var(--label-l3-SB-line-height);
    position: relative;
    white-space: nowrap;
    width: fit-content;
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

export const Step02 = () => {
  return (
    <StyledStep>
      <div className="timeline">
        <div className="head" />
        <div className="trail" />
      </div>
      <div className="content">
        <Title>
          <p className="title">
            STEP 2. 내가 꼭 필요로 하는 주택 조건 확인하기
          </p>
        </Title>
        <Description>
          <p className="description">
            이번엔 내가 왜 이사가 필요한지 생각해봐야 해요. 이전 집에서는 무엇이
            가장 불편했나요? 어떤 조건이 더 나아지길 바랬나요? 학교 또는
            직장과의 거리, 편의점, 마트, 병원 같은 필요한 시설의 유무 등 고려할
            조건을 나열하고 우선순위를 작성해보세요.
          </p>
        </Description>
        <div className="suggestion">
          <div className="keywords-container">
            <div className="keyword-wrapper">
              <div className="keyword">
                <div className="label">~한 주택</div>
              </div>
              <div className="keyword">
                <div className="label">~가 좋은 주택</div>
              </div>
              <div className="keyword">
                <div className="label">~가 아닌 주택</div>
              </div>
            </div>
          </div>
          <div className="design-component-instance-node">
            <Profile>
              <img className="beaver" alt="beaver" src="beaver.png" />
              <div className="bot-name">비버’s comment</div>
            </Profile>
            <Comment>
              <p className="comment">
                질문에 해주신 답변을 토대로 사용자님이 관심 가질 수 있는 매물 몇
                개를 찾아왔어요. 만약 실제로 방문해 보고 싶은 매물이 있다면
                '문의하기' 버튼을 클릭해보세요. 비버가 대신 문의글을
                작성해드릴게요. 작성된 글을 검토하시고 바로 중개사무소에
                문의해보세요!
              </p>
            </Comment>
          </div>
        </div>
      </div>
    </StyledStep>
  );
};
