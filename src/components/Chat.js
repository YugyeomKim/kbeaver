import { useState, useEffect, useRef, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { sizing } from "../util";

import BieverSaying from "./BieverSaying";
import Button from "./Button";
import InputField from "./InputField";
import questions from "../assets/questions.json";
import UserSaying from "./UserSaying";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;

  padding: ${sizing(20)} ${sizing(0)};
  height: ${sizing(910)};
  width: 100%;
  gap: ${sizing(24)};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${sizing(10)};
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${sizing(12)};
  /* height: ${sizing(672)}; */
`;

const Image = styled.img`
  cursor: pointer;
  width: ${sizing(266)};
  height: ${sizing(300)};
  border-radius: ${sizing(12)};
  opacity: ${(props) => (props.ischecked === "true" ? 0.5 : 1)};
`;

const ImageSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${sizing(12)};
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${sizing(24)} ${sizing(0)};

  position: absolute;
  bottom: 0;
  width: 100%;

  background: #ffffff;
`;

const Question = ({ text }) => {
  return text.split("\n").map((line, i) => (
    <Fragment key={i}>
      {line}
      <br />
    </Fragment>
  ));
};

export default function Chat() {
  const navigate = useNavigate();

  const [pageIndex, setPageIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [checked, setChecked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const messagesEndRef = useRef(null);

  let disabled = false;

  const handleSubmit = (e) => {
    setPageIndex(pageIndex + 1);

    setAnswers([
      ...answers,
      {
        category: questions[pageIndex].category,
        name: questions[pageIndex].name,
        value: e.target.value,
        text: e.target.innerText,
      },
    ]);

    if (pageIndex === 0) {
      if (e.target.value === "true") {
        questions.splice(3, 2);
      } else {
        questions.splice(2, 1);
      }
    }
  };

  const handleCheck = (idx) => {
    if (
      checked.filter((answer) => answer === true).length >= 3 &&
      checked[idx] === false
    )
      return;

    const newCheckedList = [...checked];
    newCheckedList[idx] = !newCheckedList[idx];
    setChecked(newCheckedList);
  };

  const handleCheckSubmit = (e) => {
    const checkedAnswers = questions[pageIndex].options.filter(
      (option, idx) => checked[idx] === true
    );

    const SelectedImages = (
      <ImageContainer>
        {checkedAnswers.map((answer) => (
          <Image src={require(`../assets/${answer.image}`)} />
        ))}
      </ImageContainer>
    )

    if (checkedAnswers.length < 3) {
      const result = {
        target: {
          value: checkedAnswers.map((answer) => answer.value),
          innerText: SelectedImages,
        },
      };
      handleError(result, "3개를 선택해주세요.");
      return;
    }

    setPageIndex(pageIndex + 1);

    setAnswers([
      ...answers,
      {
        category: questions[pageIndex].category,
        name: questions[pageIndex].name,
        value: checkedAnswers.map((answer) => answer.value),
        text: SelectedImages,
      },
    ]);
  };

  const handleError = (e, errorMessage) => {
    setPageIndex(pageIndex + 1);

    questions.splice(pageIndex + 1, 0, {
      category: questions[pageIndex].category,
      name: questions[pageIndex].name,
      text: errorMessage,
      type: questions[pageIndex].type,
      options: questions[pageIndex].options,
    });

    setAnswers([
      ...answers,
      {
        name: "error",
        value: e.target.value,
        text: e.target.innerText,
      },
    ]);
  };

  const handleEnding = (e) => {
    const totalAnswersArray = answers.filter(
      (answer) => answer.name !== "error"
    );

    const totalAnswer = {
      housing: {},
      financial: {},
    };

    for (const answer of totalAnswersArray) {
      if (answer.category === "housing") {
        totalAnswer.housing[answer.name] = answer.value;
      } else if (answer.category === "financial") {
        totalAnswer.financial[answer.name] = answer.value;
      }
    }

    console.log(totalAnswer);
    navigate("/plan");
  };

  const chatting = () => {
    const chatArr = [];

    for (let questionIdx = 0; questionIdx <= pageIndex; questionIdx++) {
      const question = questions[questionIdx];

      chatArr.push(
        <Fragment key={questionIdx}>
          {questionIdx > 0 && answers[questionIdx - 1] && (
            <UserSaying>{answers[questionIdx - 1].text}</UserSaying>
          )}
          <BieverSaying>
            <Question text={question.text} />
            {pageIndex === questionIdx &&
            (question.type === "select" || question.type === "ending")
              ? ((disabled = true),
                (
                  <ButtonContainer>
                    {question.options.map((option, optionIdx) => (
                      <Button
                        key={optionIdx}
                        onClick={
                          question.type === "select"
                            ? handleSubmit
                            : handleEnding
                        }
                        value={option.value}
                      >
                        {option.text}
                      </Button>
                    ))}
                  </ButtonContainer>
                ))
              : pageIndex === questionIdx && question.type === "image-select"
              ? ((disabled = true),
                console.log(checked),
                (
                  <ImageSelectContainer>
                    <ImageContainer>
                      {question.options.map((option, optionIdx) => (
                        <Fragment key={optionIdx}>
                          <Image
                            src={require(`../assets/${option.image}`)}
                            ischecked={checked[optionIdx].toString()}
                            onClick={() => handleCheck(optionIdx)}
                          />
                        </Fragment>
                      ))}
                    </ImageContainer>
                    <Button onClick={handleCheckSubmit}>선택 완료</Button>
                  </ImageSelectContainer>
                ))
              : (disabled = false)}
          </BieverSaying>
          <div ref={messagesEndRef} />
        </Fragment>
      );
    }
    return chatArr;
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [pageIndex]);

  return (
    <Container>
      <ChatContainer>{chatting()}</ChatContainer>
      <InputContainer>
        <InputField
          disabled={disabled}
          propsFunction={handleSubmit}
          errorFunction={handleError}
          questionType={questions[pageIndex].type}
        />
      </InputContainer>
    </Container>
  );
}
