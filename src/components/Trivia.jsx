import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import play from "../sound/play.mp3";
import correct from "../sound/correct.mp3";
import wrong from "../sound/wrong.mp3";

const Trivia = ({ data, setStop, questionNo, setQuestionNo }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNo - 1]);
  }, [data, questionNo]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (ans) => {
    setSelectedAnswer(ans);
    setClassName("answer active");

    delay(1000, () =>
      setClassName(ans.correct ? "answer correct" : "answer wrong")
    );

    delay(3000, () => {
      if (ans.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNo((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => setStop(true));
      }
    });
  };
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((ans) => (
          <div
            className={ans == selectedAnswer ? className : "answer"}
            onClick={() => handleClick(ans)}
          >
            {ans?.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
