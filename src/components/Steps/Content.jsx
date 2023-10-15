import styled from "styled-components";

const StyledContent = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  padding: 0px 0px 108px;
  position: relative;
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

export const Content = () => {
  return (
    <StyledContent className="content">
      <div>
        <Title>
          <p className="title">STEP 3. 매물 찾아보고 부동산에 문의하기</p>
        </Title>
        <Description>
          <p className="description">
            온라인으로 집의 사진, 가격, 위치 등을 확인하고 실제로 방문해볼
            매물을 몇 개 후보로 정했다면, 부동산 방문 문의를 하시는 것이 좋아요.
            방문 전에 문의하지 않으면 원하는 집을 보지 못할 확률이 높아요. 방문
            문의글은 비버가 수집한 정보를 바탕으로 자동 생성해 줄게요.
          </p>
        </Description>
      </div>
      <div>
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
    </StyledContent>
  );
};
