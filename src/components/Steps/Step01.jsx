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
  }

  & .content {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 48px;
    padding: 0px 0px 108px;
    position: relative;

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

      & .products {
        align-items: flex-start;
        display: flex;
        flex: 0 0 auto;
        gap: 12px;
        position: relative;
        width: 828px;

        & .product {
          align-items: center;
          border: 1px solid;
          border-color: #ccc9c5;
          border-radius: 12px;
          display: flex;
          flex: 1;
          flex-grow: 1;
          justify-content: space-between;
          padding: 16px 20px;
          position: relative;

          & .information {
            align-items: flex-start;
            display: inline-flex;
            flex: 0 0 auto;
            flex-direction: column;
            position: relative;

            & .bank-name {
              color: var(--material-themerefneutralneutral6);
              font-family: var(--label-l3-SB-font-family);
              font-size: var(--label-l3-SB-font-size);
              font-style: var(--label-l3-SB-font-style);
              font-weight: var(--label-l3-SB-font-weight);
              letter-spacing: var(--label-l3-SB-letter-spacing);
              line-height: var(--label-l3-SB-line-height);
              margin-top: -1px;
              position: relative;
              white-space: nowrap;
              width: fit-content;
            }

            & .product-name {
              color: var(--material-themerefneutralneutral6);
              font-family: var(--label-l3-m-font-family);
              font-size: var(--label-l3-m-font-size);
              font-style: var(--label-l3-m-font-style);
              font-weight: var(--label-l3-m-font-weight);
              letter-spacing: var(--label-l3-m-letter-spacing);
              line-height: var(--label-l3-m-line-height);
              position: relative;
              white-space: nowrap;
              width: fit-content;
            }
          }

          & .arrow-forward-ios {
            height: 20px;
            position: relative;
            width: 20px;
          }
        }
      }
    }
  }
`;

const Title = styled.div`
  height: 32px;
  width: 299px;

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

export const Step01 = () => {
  return (
    <StyledStep>
      <div className="timeline">
        <div className="head" />
        <div className="trail" />
      </div>
      <div className="content">
        <Title>
          <p className="title">STEP 1. 내 자산과 대출 상품 파악하기</p>
        </Title>
        <Description>
          <p className="description">
            집을 마련할 때는 먼저 얼마나 많은 돈을 쓸 수 있는지 계산해봐야 해요.
            그 다음으로는 어떤 종류의 집(아파트, 빌라, 다가구집, 원룸, 오피스텔
            등)을 월세로 살건지 전세로 살건지 결정해야 해요. 전세를 선택한다면,
            은행에서 전세자금 대출이 필요하겠죠? 그런 경우엔 은행에 가서 상담도
            받아보세요. &#39;얼마나 대출받을 수 있는지&#39;와 &#39;이자는 얼마나
            나오는지&#39;를 반드시 확인해야 해요.
          </p>
        </Description>
        <div className="suggestion">
          <Profile>
            <img className="beaver" alt="beaver" src="beaver.png" />
            <div className="bot-name">비버’s comment</div>
          </Profile>
          <Comment>
            <p className="comment">
              사용자 님의 답변을 분석한 결과, 사용자 님은 자산은 ~ 규모이고 ~
              아래에 사용자 님이 관심가질만한 대출 상품을
              가져왔어요.&nbsp;&nbsp;
              <br />
              &lt;- 여기 들어갈 내용은 금융상품 추천 질문 완성되면
              추가하겠습니다. 전체적인 컨셉은 ‘금융상품 추천 관련 질문’ 에서
              받았던 답변을 요약해주는 것 입니다.
            </p>
          </Comment>
          <div className="products">
            <div className="product">
              <div className="information">
                <div className="bank-name">KB국민은행</div>
                <div className="product-name">퍼스트홈론</div>
              </div>
              <img
                className="arrow-forward-ios"
                alt="Arrow forward ios"
                src="arrow_forward_ios.png"
              />
            </div>
            <div className="product">
              <div className="information">
                <div className="bank-name">NH농협은행</div>
                <div className="product-name">홈드림모기지론</div>
              </div>
              <img
                className="arrow-forward-ios"
                alt="Arrow forward ios"
                src="arrow_forward_ios.png"
              />
            </div>
            <div className="product">
              <div className="information">
                <div className="bank-name">교보생명</div>
                <div className="product-name">교보e아파트론</div>
              </div>
              <img
                className="arrow-forward-ios"
                alt="Arrow forward ios"
                src="arrow_forward_ios.png"
              />
            </div>
          </div>
        </div>
      </div>
    </StyledStep>
  );
};
