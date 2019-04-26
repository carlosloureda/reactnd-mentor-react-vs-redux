import reducer from "../reducers";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  avatar: "/img/thanos.jpg",
  userName: "Thanos"
};
const composeEnhancers = composeWithDevTools({ trace: true });
export const store = createStore(reducer, initialState, composeEnhancers());
