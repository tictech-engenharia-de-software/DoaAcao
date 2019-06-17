import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from '/FacebookLogin';
import GoogleLogin from '/GoogleLogin';
import Button from '@material-ui/core/Button';
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

let loginCheck = () => {
  let email = document.getElementsByClassName("email").value
  let password = document.getElementsByClassName("password").value
  console.log(email);
  console.log(password);
  email == "doaacao" && password == "1234" ?  true : false
}

let InstitutionLogin = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
		  <img src= { logo } alt="logo" />
        <Typography component="h1" variant="h5">
          Encontre voluntários!
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            className="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            className="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              href= { loginCheck ? "events" : "#"}
            >
              Sign In
            </Button>
        </form>

      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}

export default InstitutionLogin;