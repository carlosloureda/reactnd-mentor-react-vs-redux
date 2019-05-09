import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./Invoices.css";
import ReduxContext from "../context";

const Invoices = props => {
  return (
    <ReduxContext.Consumer>
      {store => {
        const { userName } = props;
        return (
          <div>
            <h1>
              Invoices page for <strong>{userName}</strong>
            </h1>
            <div>
              <p>
                On this page we would be showing user invoices, just an
                scheleton
              </p>
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
      }}
    </ReduxContext.Consumer>
  );
};

Invoices.propTypes = {
  userName: PropTypes.string.isRequired
};

export default connect(state => ({ userName: state.userName }))(Invoices);
