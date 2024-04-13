import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import AppContainer from "./containers/AppContainer";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </React.StrictMode>,
    document.querySelector("#app")
);