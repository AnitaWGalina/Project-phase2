import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import "./index.css";
import App from "./App";

=======
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

>>>>>>> f22999ab220e3cb46727b5ecb1514ea0d3cd99d9
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
