import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./Invoices.css";

const Invoices = props => {
  const { userName } = props;
  console.log("[invoices] props: ", props);
  return (
    <div>
      <h1>
        Invoices page for <strong>{userName}</strong>
      </h1>
      <div>
        <p>On this page we would be showing user invoices, just an scheleton</p>
        <div className="invoices">
          <img src="/img/invoices.png" alt="Sample invoice" />
          <img src="/img/invoices.png" alt="Sample invoice" />
          <img src="/img/invoices.png" alt="Sample invoice" />
          <img src="/img/invoices.png" alt="Sample invoice" />
          <img src="/img/invoices.png" alt="Sample invoice" />
          <img src="/img/invoices.png" alt="Sample invoice" />
          <img src="/img/invoices.png" alt="Sample invoice" />
          <img src="/img/invoices.png" alt="Sample invoice" />
          <img src="/img/invoices.png" alt="Sample invoice" />
        </div>
      </div>
    </div>
  );
};

Invoices.propTypes = {
  userName: PropTypes.string.isRequired
};

export default connect(state => ({ userName: state.userName }))(Invoices);
