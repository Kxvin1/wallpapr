import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupForm/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Splash from "./components/Splash";

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
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
