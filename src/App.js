import { useState } from 'react';
import Question from './components/Question';
import Results from './components/Results';
import questions from './data/questionsList';

function App() {
  const [step, setStep] = useState(0);
  const [isCorrect, setIsCorrect] = useState(0);
  const question = questions[step];
  const percantage = (step / questions.length) * 100;

  function onCLickVariantHandler(index) {
    question.correct === index && setIsCorrect(isCorrect + 1);
    setStep(step + 1);
  }

  function onClickTryAgain() {
    setStep(0);
    setIsCorrect(0);
  }

  return (
    <div className="App">
      {step < questions.length ? (
        <>
          <div className="progress">
            <div
              style={{ width: `${percantage}%` }}
              className="progress__inner"
            ></div>
          </div>
          <Question
            question={question}
            onCLickVariantHandler={onCLickVariantHandler}
          />
        </>
      ) : (
        <Results
          isCorrect={isCorrect}
          length={questions.length}
          onClickTryAgain={onClickTryAgain}
        />
      )}
    </div>
  );
}

export default App;
