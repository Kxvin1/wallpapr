import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";

// pages to do:
// Discover (only displayed when logged in)
// Profile (only displayed when logged in)
// Favorites (only displayed when logged in)
// Page Not Found

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Main />
            <Footer />
          </Route>
          <Route path="/members/:memberId">User's Profile Component</Route>
          <Route path="/my-favorites">Favorites Page Component</Route>
          <Route>Page Not Found Component</Route>
        </Switch>
      )}
    </>
  );
}

export default App;
