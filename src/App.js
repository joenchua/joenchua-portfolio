import React, {Component} from 'react';
import Navi from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Works from "./components/Work/Work";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Navi />
        <Home />
        <About />
        <Works />
        <Footer />
      </>
    )
  }
}

export default App;