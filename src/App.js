import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Contactus from "./components/pages/Contactus";
import Events from "./components/pages/Events";
import Blog from "./components/pages/Blog";
import Tips from "./components/pages/Tips";
import Travel from "./components/pages/Travel";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/contactus" exact component={Contactus} />
          <Route path="/events" component={Events} />
          <Route path="/blog" component={Blog} />
          <Route path="/tips" exact component={Tips} />
          <Route path="/travel" component={Travel} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
