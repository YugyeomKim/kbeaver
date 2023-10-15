import styled from "styled-components";

const StyledStep = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const Timeline = styled.div`
  display: flex;
  padding-top: 4px;
  flex-direction: column;
  align-items: center;
  gap: -4px;
  align-self: stretch;

  & .head {
    stroke-width: 4px;
    stroke: var(--material-theme-key-colors-primary, #ffb261);
    width: 24px;
    height: 24px;
  }

  & .trail {
    width: 2px;
    flex: 1 0 0;
    background: #d9d6d2;
  }
`;

const Title = styled.div`
  display: flex;
  width: 828px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

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

const Content = styled.div`
  display: flex;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
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
    align-self: stretch;
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);

    /* label / l3-M */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }
`;

const Suggestion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const Products = styled.div`
  display: flex;
  width: 828px;
  align-items: flex-start;
  gap: 12px;
`;

const Product = styled.div`
  display: flex;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  border-radius: 12px;
  border: 1px solid #ccc9c5;

  & .information {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & .bank-name {
      color: var(--material-theme-ref-neutral-neutral-6, #17130e);

      /* label / l3-SB */
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 150% */
    }

    & .product-name {
      color: var(--material-theme-ref-neutral-neutral-6, #17130e);

      /* label / l3-M */
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 150% */
    }
  }

  & .arrow-forward-ios {
    height: 20px;
    width: 20px;
  }
`;

export const Step01 = () => {
  return (
    <StyledStep>
      <Timeline>
        <div className="head">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="10" stroke="#FFB261" stroke-width="4" />
          </svg>
        </div>
        <div className="trail" />
      </Timeline>

      <Content>
        <Title>
          <div className="title">STEP 1. 내 자산과 대출 상품 파악하기</div>
          <div className="description">
            집을 마련할 때는 먼저 얼마나 많은 돈을 쓸 수 있는지 계산해봐야 해요.
            그 다음으로는 어떤 종류의 집(아파트, 빌라, 다가구집, 원룸, <br></br>
            오피스텔 등)을 월세로 살건지 전세로 살건지 결정해야 해요. 전세를
            선택한다면, 은행에서 전세자금 대출이 필요하겠죠? 그런 경우엔 은행에
            가서 상담도 받아보세요. &#39;얼마나 대출받을 수 있는지&#39;와
            &#39;이자는 얼마나 나오는지&#39;를 반드시 확인해야 해요.
          </div>
        </Title>

        <Suggestion>
          <Beaver>
            <Profile>
              <img className="beaver" alt="beaver" src="beaver.png" />
              <div className="bot-name">비버’s comment</div>
            </Profile>

            <Comment>
              <div className="comment">
                사용자 님의 답변을 분석한 결과, 사용자 님은 자산은 ~ 규모이고 ~
                아래에 사용자 님이 관심가질만한 대출 상품을
                가져왔어요.&nbsp;&nbsp;
                <br />
                &lt;- 여기 들어갈 내용은 금융상품 추천 질문 완성되면
                추가하겠습니다. 전체적인 컨셉은 ‘금융상품 추천 관련 질문’ 에서
                받았던 답변을 요약해주는 것 입니다.
              </div>
            </Comment>
          </Beaver>

          <Products>
            <Product>
              <div className="information">
                <div className="bank-name">KB국민은행</div>
                <div className="product-name">퍼스트홈론</div>
              </div>
              <img
                className="arrow-forward-ios"
                alt="Arrow forward ios"
                src="arrow_forward_ios.png"
              />
            </Product>

            <Product>
              <div className="information">
                <div className="bank-name">NH농협은행</div>
                <div className="product-name">홈드림모기지론</div>
              </div>
              <img
                className="arrow-forward-ios"
                alt="Arrow forward ios"
                src="arrow_forward_ios.png"
              />
            </Product>

            <Product>
              <div className="information">
                <div className="bank-name">교보생명</div>
                <div className="product-name">교보e아파트론</div>
              </div>
              <img
                className="arrow-forward-ios"
                alt="Arrow forward ios"
                src="arrow_forward_ios.png"
              />
            </Product>
          </Products>
        </Suggestion>
      </Content>
    </StyledStep>
  );
};
