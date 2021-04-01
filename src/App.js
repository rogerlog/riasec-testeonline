import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';

function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    handleNextQuestion,
    checkAnswer
  } = useGlobalContext();

  if (waiting) {
    return <SetupForm />
  };

  if (loading) {
    return <Loading />
  };

  const { question, r_answer, i_answer, a_answer, s_answer, e_answer, c_answer } = questions[index];
  
  let answers = [r_answer, i_answer, s_answer, e_answer, c_answer]

  const tempIndex = Math.floor(Math.random() * 5)
  
  if (tempIndex === 3) {
    answers.push(a_answer)
  } else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = a_answer
  }

  return (
    <main>
      <Modal />
      <section className="quiz">

        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  dangerouslySetInnerHTML={{ __html: answer }}
                  key={index}
                  className="answer-btn"
                  onClick={() => checkAnswer(answer, r_answer, i_answer, a_answer, s_answer, e_answer, c_answer)}
                />
              )
            })}
          </div>
        </article>        
      </section>
    </main>
  )
}

export default App
