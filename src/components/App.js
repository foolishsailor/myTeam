import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteWithTitle from "./routeWithTitle";
import GlobalStyles from "../styles/globalStyles";
import Theme from "../styles/theme";
import SiteContainer from "./containers/siteContainer";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Home from "../routes/home";
import Contact from "../routes/contact";
import About from "../routes/about";

const App = () => {
  return (
    <Router>
      <Theme>
        <GlobalStyles />
        <SiteContainer>
          <NavBar />
          <Switch>
            <RouteWithTitle
              path='/contact'
              component={Contact}
              title='Contact Us'
            />
            <RouteWithTitle path='/about' component={About} title='About Us' />
            <RouteWithTitle path='/' component={Home} title='myTeam' />
          </Switch>
          <Footer />
        </SiteContainer>
      </Theme>
    </Router>
  );
};

export default App;
