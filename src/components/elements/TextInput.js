import React, { useState, forwardRef, useImperativeHandle } from "react";

const TextInput = forwardRef((props, ref) => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  useImperativeHandle(ref, () => ({
    getText: () => {
      return text;
    }
  }));

  return (
    <label style={{fontSize: 20}}>
      {props.label}
      <input type="text" onChange={handleTextChange} />
    </label>
  );
});

export default TextInput;