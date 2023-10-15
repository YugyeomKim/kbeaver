import React from "react";
import styled from "styled-components";
import { sizing } from "../util";

const Wrapper = styled.div`
  display: flex;
  padding-bottom: ${sizing(40)};
  flex-direction: column;
  align-items: flex-start;
  gap: ${sizing(4)};
  align-self: stretch;
  border-bottom: ${sizing(1)} solid #d9d6d2;

  & .sub-title {
    color: var(--material-theme-ref-neutral-neutral-4, #120d09);
    font-family: Pretendard;
    font-size: ${sizing(26)};
    font-style: normal;
    font-weight: 600;
    line-height: ${sizing(40)}; /* 153.846% */
  }

  & .title {
    color: var(--material-theme-ref-neutral-neutral-4, #120d09);
    font-family: Pretendard;
    font-size: ${sizing(48)};
    font-style: normal;
    font-weight: 700;
    line-height: ${sizing(60)}; /* 125% */
  }
`;

export const TitleWrapper = () => {
  return (
    <Wrapper>
      <div className="sub-title">매물 추천부터 부동산 문의까지</div>
      <div className="title">맞춤형 주택 임대 플랜</div>
    </Wrapper>
  );
};
