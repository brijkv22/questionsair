import React, { useContext, useEffect, useState } from "react";
import QuestionnaireContext from "../../store/QuestionnaireContext";
import Question from "../Question";
import ProgressBar from "../ProgressBar";
import questionsData from "../../assets/json/questions.json";

const Questionnaire = () => {
  const { responses, currentStep, setCurrentStep, updateResponse } =
    useContext(QuestionnaireContext);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const handleNext = () => {
    const currentQuestion = questions[currentStep];
    const userAnswer = responses[currentQuestion.id];

    if (!userAnswer || userAnswer === "") {
      alert("Please answer the question before proceeding.");
      return;
    }

    if (currentQuestion.conditionalNext && userAnswer) {
      setCurrentStep(
        currentQuestion.conditionalNext[userAnswer] || currentStep + 1
      );
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    const userAnswer = responses[currentQuestion.id];

    if (!userAnswer || userAnswer === "") {
      alert("Please answer the question before proceeding.");
      return;
    }
    alert("Questionnaire Completed!");

    questions.forEach((question) => {
      updateResponse(question.id, null);
    });

    setCurrentStep(0);
  };

  const currentQuestion = questions[currentStep];

  return (
    <div>
      <ProgressBar currentStep={currentStep} totalSteps={questions.length} />
      <div style={{ textAlign: "center" }}>
        {currentQuestion && (
          <h1>
            <Question
              question={currentQuestion}
              updateResponse={updateResponse}
              currentStep={currentStep}
              responses={responses}
            />
          </h1>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            columnGap: "15px",
          }}
        >
          {currentStep > 0 && <button onClick={handlePrev}>Previous</button>}
          {currentStep < questions.length - 1 ? (
            <button onClick={handleNext}>Next</button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
