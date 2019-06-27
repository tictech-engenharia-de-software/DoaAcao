import React, { useState } from 'react';
import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';



const InputText = ({firebaseSend}) => {
	const [messageText, setMessageText] = useState("");
	const handleTextChange = (event) => setMessageText(event.target.value) 

	const sendMessage = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      firebaseSend(messageText);
    }
  }

	return (<TextField 
				onKeyPress={sendMessage} 
				onChange={handleTextChange} 
				value={messageText} 
				variant="outlined" 
				placeholder="Digite aqui"
			/>)

}


export default InputText;