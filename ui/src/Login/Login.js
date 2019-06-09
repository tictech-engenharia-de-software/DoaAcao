import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from '/FacebookLogin';
import GoogleLogin from '/GoogleLogin';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
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
  paper2: {
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
		  <img src= { logo } alt="logo" />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
        <Button>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Linka href="#" variant="body2">
                Forgot password?
              </Linka>
            </Grid>
            <Grid item>

			
              <Linka href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Linka>
			
            </Grid>
          </Grid>
		  <Grid item xs={6}>
          	<Paper className={classes.paper2}>
			  <Link to='/events/' >
			<FacebookLogin />
			</Link>
			  </Paper>
        	</Grid>
          <Grid item xs={6}>
          	<Paper className={classes.paper2}>
			  
			<Link to='/events/'>
			<GoogleLogin />
			</Link>
			  </Paper>
           </Grid>

        </form>

      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}

/*const Login = () => (
	<div>
		
	</div>
);

export default Login;
*/