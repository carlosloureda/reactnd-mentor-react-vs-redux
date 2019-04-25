import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import UserProfile from "./components/User/UserProfile";
import Invoices from "./components/Invoices";
import Home from "./components/Home";
import Items from "./components/Items";

import "./App.css";

class App extends Component {
  state = {
    firstName: "Thanos",
    avatar: "/img/thanos.jpg"
  };
  componentDidMount() {}
  render() {
    const { firstName, avatar } = this.state;
    return (
      <div className="App">
        <MainLayout userName={firstName} avatar={avatar}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/items/"
              render={() => <Items userName={firstName} />}
            />
            <Route
              path="/invoices/"
              render={() => <Invoices userName={firstName} />}
            />
            <Route path="/user-profile/" component={UserProfile} />
          </Switch>
        </MainLayout>
      </div>
    );
  }
}

export default App;
