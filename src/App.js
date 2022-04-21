import './main/css/index.css'
import './App.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ProductPage from "./product";
import UploadPage from "./upload";
import MainPageComponent from "./main";
import React from "react";


function App() {
    return (
        <div>
                <div id="header">
                    <div id="header-area">
                        <img src="/img/icons/logo.png" alt="logo" />
                    </div>
                </div>
                <div id="body">
                    <Switch>
                        <Route exact path="/">
                            <MainPageComponent />
                        </Route>
                        <Route path="/products/:id">
                            <ProductPage />
                        </Route>
                        <Route path="/upload">
                            <UploadPage />
                        </Route>
                    </Switch>
                    <div id="footer"></div>
                </div>
        </div>
        );
}

export default App;
