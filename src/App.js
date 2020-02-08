import React from 'react';
import Game from "./game/Game";
import Home from "./home/Home";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
        <div className="App">
            <BrowserRouter>
                <div>
                           <Link to="/home">Home</Link>{' '}
                          <Link to="/game">Game</Link>{' '}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/game" component={Game} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
  );
}

export default App;
