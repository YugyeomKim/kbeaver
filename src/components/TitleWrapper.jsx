import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  border-bottom: 1px solid #d9d6d2;

  & .sub-title {
    color: var(--material-theme-ref-neutral-neutral-4, #120d09);
    font-family: Pretendard;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px; /* 153.846% */
  }

  & .title {
    color: var(--material-theme-ref-neutral-neutral-4, #120d09);
    font-family: Pretendard;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px; /* 125% */
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
