import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const {handleSubmit} = useGlobalContext();

  
  return (
    <main>
      <section className="quiz-small quiz">
        <form className="setup-form">
          <h2>Teste Online</h2>
          <div className="form-control">
            <label>Responder a testes ou outros instrumentos poderá ser útil para aprender mais acerca dos tipos de trabalho e de atividade profissional que poderá gostar e para fazer escolhas.</label>
            <label>Embora sejam muitas vezes úteis para descobrir sobre as áreas dos cursos de ensino superior e das atividades profissionais com as quais mais nos identificamos, tais testes ou instrumentos apenas contam uma parte da nossa história de vida. Todos esses testes carecem de um auxilio de um Orientador Profissional e de Carreira qualificado para esclarecer dúvidas referente aos resultados obtidos.</label>
          </div>

          <button className="submit-btn" type="submit" onClick={handleSubmit}>Iniciar</button>
        </form>

      </section>
    </main>
  )
}

export default SetupForm
