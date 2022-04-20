import ChildConponent from "./Child";
import TimerComponent from './Timer.js'
import MainPageComponent from "./main";
import './main/css/index.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ProductPage from "./product";
import UploadPage from "./upload";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/product">
                        <ProductPage />
                    </Route>
                    <Route path="/upload">
                        <UploadPage />
                    </Route>
                    <Route path="/">
                        <MainPageComponent />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
