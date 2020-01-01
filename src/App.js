import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import About from "./components/About/About";
import CfpForm from "./components/CfpForm/CfpForm";
import LoginPage from "./components/Login/LoginPage";

class App extends Component {
    render() {
        return(
            <div className="App">
                <Switch>
                    <Route exact path='/' component={CfpForm}/>
                    <Route exact path='/login' component={LoginPage}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </div>
        )
    };
}

export default App;
