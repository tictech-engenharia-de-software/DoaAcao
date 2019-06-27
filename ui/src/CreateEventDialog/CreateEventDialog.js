import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import ImageUploader from '/ImageUploader';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase'

const CreateEventDialog = ({handleClose, open, firebase, auth}) => {
      const [name, setName] = React.useState('');
      const [description, setDescription] = React.useState('');
	const [imageURL, setImageURL] =  useState("")

      const changeHandler = (stateHandler) => event => stateHandler(event.target.value)
      const createNewEvent = () => {
	    firebase.push('events', {  name, description, organizer:auth.uid, image:imageURL})
	    setDescription('')
	    setName('')
	    handleClose()
      }

      return(
	    <Dialog open={open} onClose={handleClose}>
		  <DialogTitle id="form-dialog-title">Novo evento</DialogTitle>
		  <DialogContent>
			<TextField
			      autoFocus
			      margin="dense"
			      value={name}
			      onChange={changeHandler(setName)}
			      id="name"
			      label="Nome do Evento"
			      type="email"
			      fullWidth
			/>
			<TextField
			      multiline
			      margin="dense"
			      onChange={changeHandler(setDescription)}
			      value={description}
			      id="name"
			      label="Descrição do evento"
			      type="email"
			      fullWidth
			/>
			<ImageUploader imageURL={imageURL} setImageURL={setImageURL}/>
		  </DialogContent>
		  <DialogActions>
			<Button onClick={handleClose} color="primary">
			      Cancel
			</Button>
			<Button onClick={createNewEvent} color="primary">
			      <AddIcon/>
			      Criar
			</Button>
		  </DialogActions>
	    </Dialog>
      )
};

export default compose(
      connect( ({ firebase: { auth, profile} }) => ({ auth, profile})),
      withFirebase
)(CreateEventDialog);
