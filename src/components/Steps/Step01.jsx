import styled from "styled-components";
import { sizing } from "../../util";
import headIcon from "../../assets/head.svg";

const StyledStep = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${sizing(20)};
`;

const Timeline = styled.div`
  display: flex;
  padding-top: ${sizing(4)};
  flex-direction: column;
  align-items: center;
  gap: ${sizing(-4)};
  align-self: stretch;

  & .head {
    stroke-width: ${sizing(4)};
    stroke: var(--material-theme-key-colors-primary, #ffb261);
    width: ${sizing(24)};
    height: ${sizing(24)};
  }

  & .trail {
    width: ${sizing(2)};
    flex: 1 0 0;
    background: #d9d6d2;
  }
`;

const Title = styled.div`
  display: flex;
  width: ${sizing(828)};
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(12)};

  & .title {
    color: var(--material-themerefneutralneutral6);
    font-family: "Pretendard-Bold", Helvetica;
    font-size: ${sizing(20)};
    font-weight: 700;
    left: 0;
    letter-spacing: 0;
    line-height: ${sizing(32)};
    top: 0;
    white-space: nowrap;
  }

  & .description {
    color: var(--material-themerefneutralneutral6);
    font-family: "Pretendard-Medium", Helvetica;
    font-size: ${sizing(16)};
    font-weight: 500;
    left: 0;
    letter-spacing: 0;
    line-height: ${sizing(24)};
    top: 0;
    width: ${sizing(828)};
  }
`;

const Content = styled.div`
  display: flex;
  padding-bottom: ${sizing(108)};
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(48)};
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
    align-self: stretch;
    color: var(--material-theme-ref-neutral-neutral-6, #17130e);

    /* label / l3-M */
    font-family: Pretendard;
    font-size: ${sizing(16)};
    font-style: normal;
    font-weight: 500;
    line-height: ${sizing(24)}; /* 150% */
  }
`;

const Suggestion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(24)};
`;

const Products = styled.div`
  display: flex;
  width: ${sizing(828)};
  align-items: flex-start;
  gap: ${sizing(12)};
`;

const Product = styled.div`
  display: flex;
  padding: ${sizing(16)} ${sizing(20)};
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  border-radius: ${sizing(12)};
  border: ${sizing(1)} solid #ccc9c5;

  & .information {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & .bank-name {
      color: var(--material-theme-ref-neutral-neutral-6, #17130e);

      /* label / l3-SB */
      font-family: Pretendard;
      font-size: ${sizing(16)};
      font-style: normal;
      font-weight: 600;
      line-height: ${sizing(24)}; /* 150% */
    }

    & .product-name {
      color: var(--material-theme-ref-neutral-neutral-6, #17130e);

      /* label / l3-M */
      font-family: Pretendard;
      font-size: ${sizing(16)};
      font-style: normal;
      font-weight: 500;
      line-height: ${sizing(24)}; /* 150% */
    }
  }

  & .arrow-forward-ios {
    height: ${sizing(20)};
    width: ${sizing(20)};
  }
`;

const Head = styled.img`
  width: ${sizing(24)};
  height: ${sizing(24)};
`

export const Step01 = () => {
  return (
    <StyledStep>
      <Timeline>
        <div className="head">
          <Head src={headIcon} />
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
