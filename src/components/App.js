import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Theme from "../styles/theme";
import NavBar from "../components/NavBar";
import Home from "../routes/home";
import Contact from "../routes/contact";
import About from "../routes/about";

const App = () => {
  return (
    <Router>
      <Theme>
        <NavBar />
        <Switch>
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/' component={Home} />
        </Switch>
      </Theme>
    </Router>
  );
};

export default App;
