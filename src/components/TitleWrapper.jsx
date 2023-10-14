import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: flex-start;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: #d9d6d2;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0px 0px 40px;
  position: relative;

  & .sub-title {
    color: var(--material-themerefneutralneutral4);
    font-family: "Pretendard-SemiBold", Helvetica;
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 40px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .title {
    color: var(--material-themerefneutralneutral4);
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 60px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
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
