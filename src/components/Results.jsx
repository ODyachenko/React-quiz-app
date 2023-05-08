function Results({ isCorrect, length, onClickTryAgain }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Ви відгадали {isCorrect} відповіді з {length}{' '}
      </h2>
      <button onClick={onClickTryAgain}>Спробувати знову</button>
    </div>
  );
}

export default Results;
