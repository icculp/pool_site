import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }


function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Navigate
              to={{
                pathname: "/Metadata_CNDL",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;