import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home';
import About from "./components/About/About";
import CfpForm from "./components/CfpForm/CfpForm";

class App extends Component {
    render() {
        return(
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/cfp' component={CfpForm}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </div>
        )
    };
}

export default App;
