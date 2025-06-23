import Button from "./Button";

const Questions = ({ question, answers, onAnswerClick }) => {
  return (
    <section>
      <h2>{question}</h2>
      {answers.map((answer, index) => (
        <Button onClick={() => onAnswerClick(index)} key={index} text={answer} />
      ))}
    </section>
  );
};

export default Questions;
