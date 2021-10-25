import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import noteReducer from './store/noteReducer'

// create store

const store = createStore(noteReducer)

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
    <App />

    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
