import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Login extends React.Component{
    constructor() {
        super();
        this.state = {
              username: null,
              password: null,
              isAuthenticated: false,
              authenticated: false,
              currentUser: null,
        };
      }

    handleChange= (event) => {
              this.setState({[event.target.name] : event.target.value})
    }


   login = () => {
      console.log(JSON.stringify(this.state));
      this.setState({ authenticated : true });
      this.props.onLogin(this.state.username)
    }

    render (){
        if (this.state.isAuthenticated === true) {
          return (
              <div>
                Logged IN.
              </div>
          );
        }else{
            return (
                  <div>
                      <TextField name="username"
                        label="Username" onChange={this.handleChange}/><br/>
                      <TextField type="password" name="password"
                        label="Password" onChange={this.handleChange}/><br/><br/>
                      <Button variant="outlined" color="primary" onClick={this.login}>
                        Login
                      </Button>
                    </div>
                );
        }
    };
};

