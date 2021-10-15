import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  


  let [questions, setQuestions] = useState([])


  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(data => {
          setQuestions(data)
          })},[])
      

function handleDelete(id) {
    fetch(`http://localhost:4000/questions/${id}`, {method:"DELETE"})
    let quess = questions.filter(i => i.id !== id)
    setQuestions(quess)
}
           

function handleAdd(formData) {
  let newQuestion={
    prompt: formData.prompt,
    answers:[formData.answer1, formData.answer2, formData.answer3, formData.answer4],
    correctIndex: parseInt(formData.correctIndex)
  }
  fetch("http://localhost:4000/questions", {
  method:"POST",
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(newQuestion) })
  .then(res => res.json())
  .then(data => {
    setQuestions([...questions, data])
  })



}



function handleChange(e, id) {
  let changeThis = { correctIndex: parseInt(e.target.value) }
  fetch(`http://localhost:4000/questions/${id}`, {
    method:"PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(changeThis)    }
    )
    .then(res => res.json())
    .then (data => {
      let quess = questions.filter(i => i.id !== id)
      quess.push(data)
      quess.sort((i, j) => i.id - j.id)
      setQuestions(quess)
    })
}


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleAdd={handleAdd}/> : <QuestionList handleChange={handleChange} handleDelete={handleDelete} questions={questions}/>}
    </main>
  );
}

export default App;
