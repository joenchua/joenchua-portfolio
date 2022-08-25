import React, {Component} from 'react';
import Navi from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Works from "./components/Work/Work";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Navi />
        <Home />
        <Works />
        <Footer />
      </>
    )
  }
}

export default App;