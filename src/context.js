import axios from 'axios';
import React, { useState, useContext } from 'react';

const API_ENDPOINT = 'riasec.json';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct_r, setCorrect_r] = useState(0);
  const [correct_i, setCorrect_i] = useState(0);
  const [correct_a, setCorrect_a] = useState(0);
  const [correct_s, setCorrect_s] = useState(0);
  const [correct_e, setCorrect_e] = useState(0);
  const [correct_c, setCorrect_c] = useState(0);
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy'
  })

  const fetchQuestions = async(url) => {
    setLoading(true);
    setWaiting(false);

    const response = await axios(url).catch(err => console.log(err))
    
    if (response) {
      const data = response.data.results
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false)
      }
    } else {
      setWaiting(true);
      setError(true)
    }
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({...quiz, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `${API_ENDPOINT}`;

    fetchQuestions(url)
  }

  const handleNextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1
      if (index > questions.length - 1) {
        handleOpenModal();
        return 0
      }

      return index
    })
  };


  const checkAnswer = (value, r_answer, i_answer, a_answer, s_answer, e_answer, c_answer) => {

    switch (value){
      case r_answer:
        setCorrect_r((oldState) => oldState + 1)
        break
      case i_answer:
        setCorrect_i((oldState) => oldState + 1)
        break
      case a_answer:
        setCorrect_a((oldState) => oldState + 1)
        break
      case s_answer:
        setCorrect_s((oldState) => oldState + 1)
        break
      case e_answer:
        setCorrect_e((oldState) => oldState + 1)
        break
      case c_answer:
        setCorrect_c((oldState) => oldState + 1)
        break
      default:
        break
    }

    handleNextQuestion();
  };

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setWaiting(true);
    setCorrect_r(0);
    setCorrect_i(0);
    setCorrect_a(0);
    setCorrect_s(0);
    setCorrect_e(0);
    setCorrect_c(0);
    setModalOpen(false)
  }

  return (
    <AppContext.Provider value={
      {
        loading,
        waiting,
        questions,
        index,
        error,
        correct_r,
        correct_i,
        correct_a,
        correct_s,
        correct_e,
        correct_c,
        modalOpen,
        handleNextQuestion,
        checkAnswer,
        handleCloseModal,
        quiz,
        handleChange,
        handleSubmit
      }
    }>
      {children}
    </AppContext.Provider>
  )
};

export const useGlobalContext = () => {
  return useContext(AppContext)
};

export { AppContext, AppProvider }
