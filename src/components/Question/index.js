import React, { useState, useEffect } from "react";

const Question = ({ question, updateResponse, responses }) => {
  const [answer, setAnswer] = useState(responses[question.id] || "");

  const handleChange = (e) => {
    const newAnswer = e.target.value;
    setAnswer(newAnswer);
    updateResponse(question.id, newAnswer);
  };

  useEffect(() => {
    setAnswer(responses[question.id] || "");
  }, [question.id, responses]);

  return (
    <div>
      <div>{question.text}</div>
      {question.type === "text" && (
        <input
          type="text"
          value={answer}
          onChange={handleChange}
          placeholder="Enter your answer"
          required={question.required}
        />
      )}
      {question.type === "numeric" && (
        <input
          type="number"
          value={answer}
          onChange={handleChange}
          placeholder="Enter a number"
          required={question.required}
        />
      )}
      {question.type === "multiple-choice" && (
        <select
          value={answer}
          onChange={handleChange}
          required={question.required}
        >
          <option value="">Select an option</option>
          {question.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Question;
