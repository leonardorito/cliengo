import React, { useState } from "react";
import "./ResizableTextArea.scss";

const ResizableTextArea = ({ value, changeValue }) => {
	const [rows, setRows] = useState(2);
	const minRows = 2;
	const maxRows = 8;
	
	const handleTextArea = (event) => {
		const textareaLineHeight = 18;
		const previousRows = event.target.rows;
		event.target.rows = minRows; // reset number of rows in textarea 
		const scrollHeight = event.target.scrollHeight;
		const currentRows = Math.floor(scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
    	event.target.rows = currentRows;
    }
		
		if (currentRows >= maxRows) {
			event.target.rows = maxRows;
			event.target.scrollTop = event.target.scrollHeight;
		}

		console.log(scrollHeight, currentRows, maxRows);
    
		setRows(currentRows < maxRows ? currentRows : maxRows);
		changeValue(event.target.value);
	}

  return (
    <div className="TextArea">
      <textarea rows={rows} value={value} onChange={(el) => handleTextArea(el)}></textarea>
    </div>
  );
};

export default ResizableTextArea;
