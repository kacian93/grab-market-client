import './main/css/index.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ProductPage from "./product";
import UploadPage from "./upload";
import MainPageComponent from "./main";

function App() {
    return (
        <div>
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
        </div>
        );
}

export default App;
