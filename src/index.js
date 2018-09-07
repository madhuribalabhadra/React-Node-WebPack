import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Header} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
