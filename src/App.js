import React, { Component } from "react";
import { Provider } from "./context";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div style={{ marginTop: "70px" }} className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
