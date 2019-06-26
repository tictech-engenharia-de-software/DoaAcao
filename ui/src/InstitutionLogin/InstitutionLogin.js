import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Logo from '/Logo';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { InstitutionNotAuthenticated }from '/HOC';


const StyledContainer = styled.div`
display:flex; flex-direction:column;
justify-content:center;
margin:7.5%;
`

class InstitutionLogin extends React.Component {
  state = {
    password:'',
    email:'',
  }

  userLogin =  ({email, password}) => this.props.firebase.login({
    email,
    password
  })

  loginIfEnter = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      this.userLogin(this.state)
    }
  }

    render(){
      const { email, password } = this.state;
      return (
        <StyledContainer>
          <Logo/>
          <Typography component="h1" variant="h5">
            Encontre voluntários!
          </Typography>
          <TextField
            className="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address" value={email}
            name="email"
            onChange={(action) => this.setState({email:action.target.value})}
            autoComplete="email"
            autoFocus
          />
          <TextField
            className="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={password}
            onChange={(action) => this.setState({password:action.target.value})}
            onKeyPress={this.loginIfEnter}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.userLogin}
          >
            Sign In
          </Button>
        </StyledContainer>
      );
    }
  }

export default compose (
  firebaseConnect(),
  connect( ({ firebase: { auth, profile} }) => ({ auth, profile})),
  InstitutionNotAuthenticated,
)(InstitutionLogin);
