import React from "react";
import "./Invoices.css";
import { store } from "../store";

const Invoices = props => {
  const { userName } = store.getState();
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

export default Invoices;
