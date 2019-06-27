import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Uploader from './ImageUploader';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Linka from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '/../logo.png';

  const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

let getEventInfo = () => {
  let nome = document.getElementsByClassName("name").value
  let data = document.getElementsByClassName("date").value
  let description = document.getElementsByClassName("description").value
  console.log(nome);
  console.log(data);
  console.log(description);
  nome != "Evento" && data != "-/-/-" ? true:false
}

let createEvent = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
		  <img src= { logo } alt="logo" />
        <Typography component="h1" variant="h5">
          Crie seu evento
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            className="name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Título"
            name="name"
            autoComplete="Evento"
            autoFocus
          />
          <TextField
            className="date"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="date"
            label="Data do evento"
            id="date"
            autoComplete="-/-/-"
          />
          <TextField
            className="description"
            variant="outlined"
            margin="normal"
            fullWidth
            name="description"
            label="Descrição do evento"
            id="description"
            autoComplete="Descrição"
          />
          <Typography component="h1" variant="h6">
          Coloque uma imagem para ilustrar seu evento!
          </Typography>
          <Uploader> </Uploader>
          <Button
            type="create"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            href= { getEventInfo ? "events" : ""}
            >
            Criar
          </Button>
        </form>

      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}

export default createEvent;