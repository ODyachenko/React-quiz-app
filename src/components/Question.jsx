import Answers from './Answers';

function Question({ question, onCLickVariantHandler }) {
  return (
    <>
      <h1>{question.title}</h1>
      <ul>
        <Answers
          answersList={question.variants}
          onCLickVariantHandler={onCLickVariantHandler}
        />
      </ul>
    </>
  );
}

export default Question;
