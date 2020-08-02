import React, { useState, useEffect, useRef } from "react";
import "./ResizableTextArea.scss";

const ResizableTextArea = ({ value, changeValue }) => {
	const textAreaRef = useRef(null);
	const [rows, setRows] = useState(2);
	const minRows = 2;
	const maxRows = 8;

	useEffect(() => {
		handleTextArea(textAreaRef.current);
	}, [])
	
	const handleTextArea = (target) => {
		const textareaLineHeight = 18;
		const previousRows = target.rows;
		target.rows = minRows; // reset number of rows in textarea 
		const scrollHeight = target.scrollHeight;
		const currentRows = Math.floor(scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
    	target.rows = currentRows;
    }
		
		if (currentRows >= maxRows) {
			target.rows = maxRows;
			target.scrollTop = target.scrollHeight;
		}
    
		setRows(currentRows < maxRows ? currentRows : maxRows);
		changeValue(target.value);
	}

  return (
    <div className="TextArea">
      <textarea ref={textAreaRef} rows={rows} value={value} onChange={(event) => handleTextArea(event.target)}></textarea>
    </div>
  );
};

export default ResizableTextArea;
