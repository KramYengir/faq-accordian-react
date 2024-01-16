import React from "react";
import starIMG from "../assets/images/icon-star.svg";
import Question from "./Question";
import questions from "../assets/questionData";

const FAQPanel = () => {
  return (
    <div className="faq-panel">
      <div className="panel__header">
        <img src={starIMG} alt="Simple star shaped logo" />
        <h1>FAQs</h1>
      </div>
      <div className="questions__container">
        {questions.map((entry, index) => (
          <React.Fragment key={entry.id}>
            <Question question={entry.question} answer={entry.answer} />
            {index < questions.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FAQPanel;
