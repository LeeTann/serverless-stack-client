import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";

export default function AuthenticatedRoute({ children, ...rest }) {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useAppContext();
  return (
    <Route {...rest}>
      {isAuthenticated ? (
        // children component would be NewNote, Notes and Settings.
        children
      ) : (
        <Redirect to={
          `/login?redirect=${pathname}${search}`
        } />
      )}
    </Route>
  );
}