import React from 'react';
import Game from "./game/Game";
import Home from "./home/Home";
import Login from "./Login";
import { AuthenticatedRoute } from './AuthenticatedRoute'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'

export default class App extends React.Component{

  constructor() {
    super();
    this.state = {
          isAuthenticated: false,
          currentUser: null,
    };
  }
  render (){
    return(
        <div className="App">
                  <BrowserRouter>
                      <div>
                                <Link to="/home">Home</Link>{' '}
                                <Link to="/game">Game</Link>{' '}
                                <Link to="/login">Login</Link>{' '}
                          <Switch>
                              <Route exact path="/" component={Home} />
                              <Route exact path="/home" component={Home} />
                              <AuthenticatedRoute exact path="/game" component={Game}  isAuthenticated={this.state.isAuthenticated}/>
                              <Route exact path="/login"
                              render={(props) => <Login {...props} onLogin={this.afterLogin} />}/>
                          </Switch>
                      </div>
                  </BrowserRouter>
              </div>
    );
  };

  afterLogin = (user) => {
      this.setState({
          currentUser: user,
          isAuthenticated: true
      })

      console.log('getting use name ' , user);
  };
};
