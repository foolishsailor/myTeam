import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "../styles/globalStyles";
import Theme from "../styles/theme";
import Container from "./container";
import NavBar from "../components/NavBar";
import Home from "../routes/home";
import Contact from "../routes/contact";
import About from "../routes/about";

const App = () => {
  return (
    <Router>
      <Theme>
        <GlobalStyles />
        <Container>
          <NavBar />
          <Switch>
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/' component={Home} />
          </Switch>
        </Container>
      </Theme>
    </Router>
  );
};

export default App;
