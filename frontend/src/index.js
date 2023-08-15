import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux';
import { store } from "./app/store";

const root = createRoot(document.getElementById("root"));
root.render(

  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
