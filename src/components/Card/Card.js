import React, { useState } from "react";
import "./Card.scss";
import SwitchToggle from "../SwitchToggle/SwitchToggle";

const Card = () => {
  const [value, setValue] = useState(false);
  return (
    <div className="Card">
      <div className="card-main-container">
				<img src="/assets/conversacion.svg" className="card-img" alt="Conversacion"/>
        <h5>Horario de atencion</h5>
        <p>Atendemos de lunes a viernes de 9 a 18 hs y sabados de 10 a 13hs.</p>
      </div>
      <div className="options">
				<img src="/assets/edit.svg" alt="Edit" className="edit-card" />
        <SwitchToggle
          isOn={value}
          onColor="#1ABC9C"
          handleToggle={() => setValue(!value)}
        />
      </div>
    </div>
  );
};

export default Card;
