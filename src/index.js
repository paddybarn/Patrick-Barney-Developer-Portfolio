import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <React>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React>,
        
    document.getElementById("root"));
