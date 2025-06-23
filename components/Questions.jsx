import Button from "./Button";

const Questions = ({ question, answers, onAnswerClick, questionNumber }) => {
  return (
    <section>
      <h2 className="question">
        {" "}
        Pytanie {questionNumber}: {question}{" "}
      </h2>

      {answers.map((answer, index) => (
        <Button
          onClick={() => onAnswerClick(index)}
          key={index}
          text={answer}
        />
      ))}
    </section>
  );
};

export default Questions;
