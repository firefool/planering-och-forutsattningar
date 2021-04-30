import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MarketContainer from "./components/MarketContainer"
import About from "./components/About"
import Start from "./components/Start"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {

  return (
    <Router>
        <div>      
            <div className="container">
                <div className="inner">
                    <Header />
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/market">
                                <MarketContainer />
                            </Route>
                            <Route path="/">
                                <Start />
                            </Route>
                        </Switch>
                </div>
                <Footer />
            </div>
        </div>
    </Router>
  );
}


