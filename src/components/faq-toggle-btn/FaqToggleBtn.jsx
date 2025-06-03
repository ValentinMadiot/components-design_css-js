import { useState } from "react";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import "./FaqToggleBtn.css";

const Question = ({ title, text }) => {
  const [showText, setShowText] = useState(false);

  return (
    <article className={`question ${showText ? "show-text" : ""}`}>
      <div className="question-title">
        <p>{title}</p>
        <button
          type="button"
          className="question-btn"
          onClick={() => setShowText(!showText)}>
          <span className="plus-icon">
            <FaPlusSquare />
          </span>
          <span className="minus-icon">
            <FaMinusSquare />
          </span>
        </button>
      </div>
      {showText && (
        <div className="question-text">
          <p>{text}</p>
        </div>
      )}
    </article>
  );
};

const Questions = () => {
  const questionsData = [
    {
      title: "do you accept all major credit cards?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
    },
    {
      title: "do you support local farmers?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
    },
    {
      title: "do you use organic ingredients?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
    },
  ];

  return (
    <section className="questions">
      <div className="title">
        <h2>general questions</h2>
      </div>
      <div className="questions-container">
        {questionsData.map((q, index) => (
          <Question key={index} title={q.title} text={q.text} />
        ))}
      </div>
    </section>
  );
};

export default Questions;
