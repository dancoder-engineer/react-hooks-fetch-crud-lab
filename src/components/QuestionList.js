import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, handleDelete, handleChange}) {
    let [questionList, setQuestionList] = useState([])

       useEffect(() =>{
         let quess = questions.map(i => <QuestionItem key={i.id} handleDelete={handleDelete} handleChange={handleChange} question={i}/>) 
         setQuestionList(quess)
       }, [questions])


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;
