import Button from "../components/Button";
import Questions from "../components/Questions";
import quizQuestions from "./api/quizQuestions";
import { useState } from "react";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [points, setPoints] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  let pointPercent = (points / quizQuestions.length) * 100;
  let yourPointPercent = `${pointPercent}%`;

  const startQuiz = () => {
    setCurrentIndex(0);
  };

  const handleAnswerClick = (index) => {
    if (currentQuestion.answers[index].isCorrect) {
      setPoints((prev) => prev + 1);
    }
    setUserAnswers((prev) => [...prev, index]);
    setCurrentIndex((prev) => prev + 1);
  };

  const currentQuestion =
    currentIndex !== null ? quizQuestions[currentIndex] : null;

  const resetQuiz = () => {
    setCurrentIndex(null);
    setPoints(0);
    setUserAnswers([]);
  };

  return (
    <>
      {currentIndex === null ? (
        <section>
          {" "}
          <h2>Javascript Quiz</h2>
          <Button
            onClick={startQuiz}
            className={"startButton"}
            text="Rozpocznij quiz"
          />
        </section>
      ) : currentQuestion ? (
        <Questions
          question={currentQuestion.question}
          answers={currentQuestion.answers.map((a) => a.text)}
          onAnswerClick={handleAnswerClick}
          questionNumber={currentIndex + 1}
        />
      ) : (
        <section>
          {" "}
          <h2 style={{ color: points >= 8 ? "green" : "red" }}>
            {points >= 8
              ? "Gratulacje! Quiz zaliczony!"
              : "Niestety, quiz niezaliczony"}
          </h2>
          <span>
            Twój wynik to{" "}
            <span style={{ color: points >= 8 ? "green" : "red" }}>
              {yourPointPercent}
            </span>{" "}
            ({points} z 10 poprawnych odpowiedzi)
          </span>
          <br />
          <div>
            {userAnswers.map((answerIndex, i) => (
              <div key={i}>
                <strong className="question">
                  {" "}
                  Pytanie {i + 1}: {quizQuestions[i].question}
                </strong>
                <br />

                <span
                  style={{
                    color: quizQuestions[i].answers[answerIndex].isCorrect
                      ? "green"
                      : "red",
                  }}
                >
                  Twoja odpowiedź: {quizQuestions[i].answers[answerIndex].text}
                </span>
              </div>
            ))}
          </div>
          <br />
          <Button
            onClick={resetQuiz}
            className={"endButton"}
            text="Powrót do startu"
          />
        </section>
      )}
    </>
  );
};

export default App;
