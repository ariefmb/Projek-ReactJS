import "./style/App.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProfilePage from "./pages/profile";
import MainPage from "./pages/main";
import NotFound from "./pages/notFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <MainPage />
        </Route>
        <Route exact path="/profile" >
          <ProfilePage />
        </Route>
        <Route exact path="*" >
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
