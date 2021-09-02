import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Article from "./pages/Article";
import Bucket from "./pages/Bucket";
import Buy from "./pages/Buy";
import Home from "./pages/Home";
import Profil from "./pages/Profil";


function App() {
  return (
    <Router>
      <Switch>

        <Route path="/account">
          <Profil />
        </Route>

        <Route path="/buy2">
          <Buy />
        </Route>

        <Route path="/buy">
          <Bucket />
        </Route>

        <Route path="/cat">
          <Article />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
