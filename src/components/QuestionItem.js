import React from "react";

function QuestionItem({ question, handleDelete, handleChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

function deleteIt() {
  handleDelete(id)
}

function changeIt(e) {
  handleChange(e, id)
}

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={e => changeIt(e)} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={deleteIt}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
