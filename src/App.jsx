import "./style/App.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProfilePage from "./pages/profile";
import MainPage from "./pages/main";

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
      </Switch>
    </Router>
  );
};

export default App;
