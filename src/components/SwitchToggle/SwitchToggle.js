import React from 'react';
import './SwitchToggle.scss';

const SwitchToggle = ({ isOn, handleToggle, onColor }) => {
	return (
		<div className="SwitchToggle">
			<input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch`}
				type="checkbox"
				style={{display: 'none'}}
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch`}
      >
        <span className={`react-switch-button`} />
      </label>
		</div>
	)
}

export default SwitchToggle;
