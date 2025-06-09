import { useState } from "react";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import "./faqToggleBtn.css";

const Question = ({ title, text }) => {
  const [showText, setShowText] = useState(false);

  return (
    <article className={`faq__question ${showText ? "faq__show-text" : ""}`}>
      <div className="faq__question-title">
        <p>{title}</p>
        <button
          type="button"
          className="faq__question-btn"
          onClick={() => setShowText(!showText)}>
          <span className="faq__plus-icon">
            <FaPlusSquare />
          </span>
          <span className="faq__minus-icon">
            <FaMinusSquare />
          </span>
        </button>
      </div>
      <div className="faq__question-text">{showText && <p>{text}</p>}</div>
    </article>
  );
};

const Questions = () => {
  const questionsData = [
    {
      title: "Acceptez-vous toutes les cartes de crédit ?",
      text: "Oui, nous acceptons toutes les grandes cartes de crédit, y compris Visa, MasterCard, American Express et d'autres.",
    },
    {
      title: "Soutenez-vous les agriculteurs locaux ?",
      text: "Absolument ! Nous travaillons avec des producteurs locaux pour garantir des produits frais et de qualité tout en soutenant l’économie de la région.",
    },
    {
      title: "Utilisez-vous des ingrédients bio ?",
      text: "Oui, dans la mesure du possible, nous privilégions les ingrédients biologiques pour offrir des plats sains et respectueux de l’environnement.",
    },
  ];

  return (
    <section className="faq__questions">
      <div className="faq__title">
        <h2>Questions Général</h2>
      </div>
      <div className="faq__section">
        {questionsData.map((q, index) => (
          <Question key={index} title={q.title} text={q.text} />
        ))}
      </div>
    </section>
  );
};

export default Questions;
