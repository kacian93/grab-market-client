import 'antd/dist/antd.css';
import './main/css/index.css'
import './App.css'
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom';
import ProductPage from "./product";
import UploadPage from "./upload";
import MainPageComponent from "./main";
import React from "react";
import {Button, Radio} from 'antd';
import {DownloadOutlined} from "@ant-design/icons";


function App() {
    const  history = useHistory();
    return (
        <div>
                <div id="header">
                    <div id="header-area">
                        <Link to={"/"}>
                            <img src="/img/icons/logo.png" alt="logo" />
                        </Link>
                        <div>
                            <Button size={"large"} onClick={function(){
                                history.push('/upload')
                            }} icon={<DownloadOutlined />}>product upload</Button>
                        </div>
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
