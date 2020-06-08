import React from 'react';
import {
    Route,
    Redirect
  } from "react-router-dom";
  
  
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('accessToken') ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
      }
    />
);
  
export default PrivateRoute