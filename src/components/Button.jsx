import styled from "styled-components";
import { sizing } from "../util";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${sizing(12)} ${sizing(16)};
  border: none;
  border-radius: ${sizing(12)};
  background: #ffdcbe;

  color: #1b1918;
  cursor: pointer;

  /* label / l3-M */
  font-family: Pretendard;
  font-size: ${sizing(16)};
  font-style: normal;
  font-weight: 500;
  line-height: ${sizing(24)}; /* 150% */
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
