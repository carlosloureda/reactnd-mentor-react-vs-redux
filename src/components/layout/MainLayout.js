import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
// import Footer from "./Footer";

class MainLayout extends Component {
  render() {
    const { userName, avatar } = this.props;

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

export default connect(state => ({
  userName: state.userName,
  avatar: state.avatar
}))(MainLayout);
