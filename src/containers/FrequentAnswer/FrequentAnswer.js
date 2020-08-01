import React, { useContext, useState } from "react";
import "./FrequentAnswer.scss";
import Card from "../../components/Card/Card";
import { FrequentAnswerProvider } from "../../providers/FrequentAnswerProvider";
import Modal from "../../components/Modal/Modal";
import ModalAnswerContent from "../../components/ModalAnswerContent/ModalAnswerContent";

const FrequentAnswer = () => {
	const { answersList, changeActive } = useContext(FrequentAnswerProvider);
	const [showModal, setShowModal] = useState(false);

	const handleModal = () => {
		setShowModal(!showModal);
	}

	const handleActive = (answer) => {
		changeActive(answer);
	}
  return (
    <div className="FrequentAnswer">
      <h1 className="text-center mt-0">Respuestas frecuentes</h1>
      <div>
        <p>
          <b>
            Cliengo detecta las preguntas más frecuentes que hacen los clientes.
          </b>
        </p>
        <p>
          Optimiza el diálogo con ellos, configurando respuestas a estas
          preguntas desde aquí.
        </p>
        <p>
          <a href="#">Cómo configurar respuestas automáticas</a>
        </p>
      </div>
      <div className="row">
        {answersList &&
          answersList.map((el) => (
            <div key={el.id} onClick={handleModal} className="col">
              <Card data={el} changedActive={() => handleActive(el)} />
            </div>
          ))}
      </div>
      <Modal show={showModal} modalClosed={handleModal}>
        <ModalAnswerContent />
      </Modal>
    </div>
  );
};

export default FrequentAnswer;
