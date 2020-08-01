import React from 'react';
import './SwitchToggle.scss';

const SwitchToggle = ({ isOn, handleToggle, onColor, id }) => {
	return (
		<div className="SwitchToggle">
			<input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-${id}`}
				type="checkbox"
				style={{display: 'none'}}
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-${id}`}
      >
        <span className={`react-switch-button`} />
      </label>
		</div>
	)
}

export default SwitchToggle;
