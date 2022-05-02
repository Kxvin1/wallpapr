import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import UserProfileInfo from "./components/UserProfileInfo";

// pages to do:
// Page Not Found
// Favorites (only displayed when logged in) -- bonus

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
          <Route path="/members/:memberId">
            <UserProfile />
          </Route>
          <Route path="/profiles/:memberId">
            <UserProfileInfo />
          </Route>
          <Route>Page Not Found Component</Route>
        </Switch>
      )}
    </>
  );
}

export default App;
