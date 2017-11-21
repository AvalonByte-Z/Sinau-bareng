// import react
import React from "react";
import ReactDOM from "react-dom";

// import for styling
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./index.css";
import './styles/components.css'


// import for app
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
