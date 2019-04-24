import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class MainLayout extends Component {
  render() {
    console.log("this.props.children: ", this.props.children);
    return (
      <div>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
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
