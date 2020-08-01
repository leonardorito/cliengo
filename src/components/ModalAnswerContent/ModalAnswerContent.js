import React, { Fragment, useState } from "react";
import "./ModalAnswerContent.scss";
import Button from "../Button/Button";
import SwitchToggle from "../SwitchToggle/SwitchToggle";

const ModalAnswerContent = ({ save, data, close }) => {
  const [description, setDescription] = useState(data.description);
  const [active, setActive] = useState(data.active);

  const sendNewData = () => {
    save({
      ...data,
      description,
      active: !active,
    });
  };

  return (
    <Fragment>
      <div className="ModalAnswerContent">
        <div className="modal-title">
          <h4>
            <img src="/assets/flash.svg" alt="Rapido" className="modal-img" />
            <span className="purple-text">Respuesta a: </span>{data.title}
          </h4>
          <div className="d-flex">
            <SwitchToggle
              id={`modal-${data.id}`}
              isOn={active}
              onColor="#1ABC9C"
              handleToggle={() => setActive(!active)}
            />
						<img src="/assets/close.svg" alt="Cerrar" className="close" onClick={close} />
          </div>
        </div>
        <p>
          <b>
            Si el cliente consulta por {data.title.toLowerCase()}, el chatbot
            responderá
          </b>
        </p>
        <textarea
          rows="2"
          value={description}
          onChange={(el) => setDescription(el.target.value)}
        ></textarea>
        <div className="options">
          <Button text="Guardar" onClick={sendNewData} />
        </div>
      </div>
    </Fragment>
  );
};

export default ModalAnswerContent;
