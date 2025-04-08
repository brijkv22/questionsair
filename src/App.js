import React from 'react';
import { QuestionnaireProvider } from './store/QuestionnaireContext';
import Questionnaire from './components/Questionnaire';

const App = () => {
    return (
        <QuestionnaireProvider>
            <div>
                <h1>Dynamic Questionnaire</h1>
                <Questionnaire />
            </div>
        </QuestionnaireProvider>
    );
};

export default App;