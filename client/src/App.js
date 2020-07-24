import React, { Fragment, useEffect } from "react";
import Navbar from "./component/Layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./component/pages/Dashboard";
import About from "./component/pages/About";
import Landing from "./component/Layout/Landing";
import Alert from "./component/Layout/Alert";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import PrivateRoute from "./component/routing/PrivateRoute";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <div className='container'>
            <Alert />
            <Switch>
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <Route exact path='/about' component={About} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
