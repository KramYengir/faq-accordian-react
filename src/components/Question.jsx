import plusIMG from "../assets/images/icon-plus.svg";
import minusIMG from "../assets/images/icon-minus.svg";
import { useState } from "react";

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="question__header">
        <h3>{question}</h3>
        <button onClick={() => setIsOpen(!isOpen)}>
          <img
            src={isOpen ? minusIMG : plusIMG}
            alt={isOpen ? "A minus icon" : "A plus icon"}
          />
        </button>
      </div>
      {isOpen && <div className="question__answer">{answer}</div>}
    </>
  );
};

export default Question;
