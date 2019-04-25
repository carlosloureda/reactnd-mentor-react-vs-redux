import React from "react";
import "./Invoices.css";

const Invoices = props => (
  <div>
    <h1>Invoices page for {props.userName}</h1>
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

export default Invoices;
