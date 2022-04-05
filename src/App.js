import React, {Component} from "react";
import {connect} from "react-redux";
import {Router, Switch} from "react-router-dom";
import RoutingList from './router/RoutingList';
import {history} from './helpers/history';


class App extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <Router history={history}>
                        <Switch>
                              <RoutingList/>
                        </Switch>
                  </Router>
            );
      }
}


export default connect()(App);
