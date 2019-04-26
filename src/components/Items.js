import React from "react";
import { store } from "../store";

const Items = () => {
  const { userName } = store.getState();
  return (
    <div>
      <h1>
        Items page for <strong>{userName}</strong>
      </h1>
      <div>
        <p>On this page we would be showing user items, like travels bought</p>
        <div className="items">
          <img src="/img/paradise1.jpg" alt="Sample item" />
          <img src="/img/paradise2.jpg" alt="Sample item" />
          <img src="/img/paradise3.jpg" alt="Sample item" />
          <img src="/img/paradise4.jpg" alt="Sample item" />
          <img src="/img/paradise5.jpg" alt="Sample item" />
          <img src="/img/paradise6.jpg" alt="Sample item" />
          <img src="/img/paradise7.jpg" alt="Sample item" />
          <img src="/img/paradise8.jpg" alt="Sample item" />
          <img src="/img/paradise9.jpg" alt="Sample item" />
        </div>
      </div>
    </div>
  );
};
export default Items;
