import "./style/App.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProfilePage from "./pages/profile";
import MainPage from "./pages/main";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Switch>
    </Router>
  );
};

export default App;
