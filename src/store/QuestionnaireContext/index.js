import React, { createContext, useState } from "react";

const QuestionnaireContext = createContext();

export const QuestionnaireProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});

  const updateResponse = (questionId, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: value,
    }));
  };

  return (
    <QuestionnaireContext.Provider
      value={{ responses, currentStep, setCurrentStep, updateResponse }}
    >
      {children}
    </QuestionnaireContext.Provider>
  );
};

export default QuestionnaireContext;
