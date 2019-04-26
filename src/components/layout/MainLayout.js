import React, { Component } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import { store } from "../../store";

export default class MainLayout extends Component {
  render() {
    const { userName, avatar } = store.getState();
    return (
      <div>
        <Header userName={userName} avatar={avatar} />
        <main>{this.props.children}</main>
        {/* <Footer /> */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </div>
    );
  }
}
