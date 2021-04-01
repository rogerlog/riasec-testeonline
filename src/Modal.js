import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const { modalOpen, handleCloseModal, correct_r, correct_i, correct_a, correct_s, correct_e, correct_c } = useGlobalContext();

  var titulo1 = ""
  var resposta1 = ""

  var titulo2 = ""
  var resposta2 = ""

  const corrects = [correct_r, correct_i, correct_a, correct_s, correct_e, correct_c];

  const resultado_r = ["Resultado “R” REALISTA", "Contextos técnicos e ar livre: Pessoas práticas, físicas e atléticas utilizam máquinas, ferramentas, coordenação física e senso comum para resolver problemas concretos que envolvam a reparação, a construção, os transportes, as plantas e animais e a atividade física."];
  const resultado_i = ["Resultado “I” INVESTIGATIVO", "Contextos científicos e analíticos: Pessoas lógicas e curiosas utilizam métodos racionais, matemáticos e de pesquisa para resolver problemas que envolvam a descoberta, a exploração, a investigação, a observação e a avaliação."];
  const resultado_a = ["Resultado “A” ARTÍSTICO", "Contextos criativos e estéticos: Pessoas imaginativas e expressivas utilizam a arte, o teatro, a música e a originalidade para resolver problemas artísticos envolvendo a criatividade, a invenção, a performance e a escrita."];
  const resultado_s = ["Resultado “S” SOCIAL", "Contextos de ajuda e educativos: Pessoas prestativas e sociáveis utilizam o diálogo, as instruções, a compreensão, o trabalho de equipe e o cuidado para resolver problemas sociais que envolvam a educação, o apoio, o serviço comunitário e as relações."];
  const resultado_e = ["Resultado “E” EMPREENDEDOR", "Contextos de gestão e políticos: Pessoas persuasivas e poderosas utilizam a liderança, a estratégia, a influência e a destreza para resolver problemas de negócios, legais e governamentais que envolvam ganhos econômicos, opinião, risco e competição."];
  const resultado_c = ["Resultado “C” CONVENCIONAL", "Contextos de escritório e estruturados: Pessoas metódicas e organizadas utilizam a precisão, a responsabilidade, organização, o detalhe, a exatidão e a cautela para resolver problemas burocráticos e de procedimentos que envolvam organização, manutenção de registros, gestão de dados e agendamento."];

  const resultados = [resultado_r, resultado_i, resultado_a, resultado_s, resultado_e, resultado_c];

  var sd = true;

  for (var i = 0; i < 6; i++) {

    if (corrects[i] === 2) {
      titulo1 = resultados[i][0];
      resposta1 = resultados[i][1];
      document.getElementById("resp2").style.display = 'none';      
    } else if (corrects[i] === 1) {
      if (sd) {
        titulo1 = resultados[i][0];
        resposta1 = resultados[i][1];
        sd = false;
      } else {
        titulo2 = resultados[i][0];
        resposta2 = resultados[i][1];
      }
      document.getElementById("resp2").style.display = 'block';
    }
  }

  return (
    <div className={`modal-container ${modalOpen && 'isOpen'}`}>
      <div className="modal-content">

        <div className="res1">
          <h2>{(titulo1)}</h2>
          <label>{(resposta1)}</label>
        </div>

        <div className="res2" id="resp2">
          <h2>{(titulo2)}</h2>
          <label>{(resposta2)}</label>
        </div>

        <button className="close-btn" onClick={handleCloseModal}>Refazer</button>
        <button className="close-btn" onClick={function () { window.location.href = "https://www.orientup.com.br"; }}>Sair</button>
      </div>
    </div>
  )
}

export default Modal