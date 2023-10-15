import { useState } from "react";
import styled from "styled-components";
import { sizing } from "../util";
import sendIcon from "../assets/icon-send.svg";

const InputForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: ${sizing(824)};
  padding: ${sizing(20)} ${sizing(24)};

  border-radius: 12px;
  border: 1px solid #d9d6d2;
  background: #fff;
`;

const Input = styled.input`
  flex: 1;

  &::placeholder {
    color: ${(props) => (props.disabled ? "#8D8C8B" : "#1B1918")};
  }
  color: #1b1918;
  border: none;

  /* label / l3-M */
  font-family: Pretendard;
  font-size: ${sizing(16)};
  font-style: normal;
  font-weight: 500;
  line-height: ${sizing(24)}; /* 150% */
`;

const SendButton = styled.button`
  background: transparent;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const SendIcon = styled.img`
  width: ${sizing(32)};
  height: ${sizing(32)};
`;

export default function InputField({
  disabled,
  propsFunction,
  errorFunction,
  questionType,
}) {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();

    if (!userInput) return;

    const result = {
      target: {
        value: userInput,
        innerText: questionType === "number" ? `${userInput}만원` : userInput,
      },
    };

    if (questionType === "number" && isNaN(userInput)) {
      errorFunction(result, "숫자만 입력해주세요.");
    } else if (questionType === "input-check") {
      /** @todo fetch result */
      // const { region_exist } = await fetch('https://0201055967.for-seoul.synctreengine.com/region', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({ region: userInput })
      // }).catch((err) => {
      //   console.log(err);
      //   alert("서버에 문제가 생겼습니다. 다시 시도해주세요.")
      //   window.location.replace("/")
      // });

      const region_exist = true

      console.log(region_exist);

      if (region_exist) {
        propsFunction(result);
      } else {
        errorFunction(result, "정확한 동이름 혹은 지하철역을 입력해주세요.");
      }
    } else {
      propsFunction(result);
    }

    setUserInput("");
  };

  return (
    <InputForm onSubmit={handleButtonClick}>
      <Input
        value={userInput}
        onChange={handleInputChange}
        placeholder="답변을 해주세요."
        disabled={disabled}
      />
      <SendButton disabled={disabled}>
        <SendIcon src={sendIcon} />
      </SendButton>
    </InputForm>
  );
}
