function StartScreen({ maxNumQuestions, numQuestions, dispatch, difficulty }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>
        How hard do you want the questions to be?
        <select
          className="btn btn-select"
          name="chooseDifficulty"
          id="chooseDifficulty"
          value={difficulty}
          onChange={(e) =>
            dispatch({ type: "difficulty", payload: e.target.value })
          }
        >
          <option value="10">Easy</option>
          <option value="20">Medium</option>
          <option value="30">Hard</option>
          <option value="40">Just give me all the questions!</option>
        </select>
      </h3>
      <h3>
        How many questions would you like?
        <select
          className="btn btn-select"
          name="chooseNumQuestions"
          id="chooseNumQuestions"
          value={numQuestions}
          onChange={(e) =>
            dispatch({ type: "numOfQuestions", payload: e.target.value })
          }
        >
          {Array.from({ length: numQuestions }, (_, i) => i + 1).map((num) => (
            <option>{num}</option>
          ))}
        </select>
      </h3>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
