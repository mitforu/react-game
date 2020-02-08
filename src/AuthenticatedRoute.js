import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import React from 'react';

export const  AuthenticatedRoute = ({ component: Component, isAuthenticated, ...rest}) => {
                                     return (
                                       <Route {...rest} render={props => (
                                           isAuthenticated ? (
                                             <Component {...props}/>
                                           ) : (
                                             <Redirect to={{
                                               pathname: '/not-found',
                                               state: { from: props.location }
                                             }}/>
                                           )
                                         )}/>);
                                   }