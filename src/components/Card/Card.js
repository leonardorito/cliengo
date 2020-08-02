import React, { useState } from "react";
import "./Card.scss";
import SwitchToggle from "../SwitchToggle/SwitchToggle";
import PropTypes from 'prop-types'

const Card = (props) => {
	const {data, changedActive} = props;
  return (
    <div className="Card">
      <div className="card-main-container">
				<img src="/assets/conversacion.svg" className="card-img" alt="Conversacion"/>
        <h5>{data.title}</h5>
        <p>{data.description}</p>
      </div>
      <div className="options">
				<img src="/assets/edit.svg" alt="Edit" className="edit-card" />
        <SwitchToggle
					id={data.id}
          isOn={data.active}
          onColor="#1ABC9C"
          handleToggle={changedActive}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
	data: PropTypes.object.isRequired,
	changedActive: PropTypes.func.isRequired
};

export default Card;
