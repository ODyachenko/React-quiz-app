function Answers({ answersList, onCLickVariantHandler }) {
  return answersList.map((answer, index) => {
    return (
      <li onClick={() => onCLickVariantHandler(index)} key={index}>
        {answer}
      </li>
    );
  });
}

export default Answers;
