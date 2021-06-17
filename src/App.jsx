import "./App.css";
import { useState, useEffect, useMemo } from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [questionNo, setQuestionNo] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [username, setUsername] = useState('');

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Car",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
      ],
    },
    {
      id: 1,
      question: "Which is the top smartphone brand?",
      answers: [
        {
          text: "Apple",
          correct: false,
        },
        {
          text: "Samsung",
          correct: true,
        },
        {
          text: "Xiaomi",
          correct: false,
        },
        {
          text: "Oppo",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = [
    {
      id: 1,
      amount: "$ 100",
    },
    {
      id: 2,
      amount: "$ 200",
    },
    ,
    {
      id: 3,
      amount: "$ 300",
    },
    {
      id: 4,
      amount: "$ 400",
    },
    {
      id: 5,
      amount: "$ 500",
    },
    {
      id: 6,
      amount: "$ 600",
    },
  ].reverse();

  useEffect(() => {
    questionNo > 1 &&
      setEarned(moneyPyramid.find((m) => m?.id === questionNo - 1).amount);
  }, [questionNo, moneyPyramid]);
  return (
    <div className="App">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h2 className="endText">You earned : {earned}</h2>
            ) : (
              <>
                {" "}
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNo={questionNo} />{" "}
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNo={questionNo}
                    setQuestionNo={setQuestionNo}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid?.map((m) => (
                <li
                  className={
                    questionNo == m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                  onClick={() => setQuestionNo(m.id)}
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
