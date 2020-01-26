import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import About from "./components/About/About";
import LoginPage from "./components/Login/LoginPage";
import SignupPage from "./components/Signup/SignupPage";
import CommunityPage from "./components/CommunityPage/CommunityPage";

class App extends Component {
    render() {
        return(
            <div className="App">
                <Switch>
                    <Route exact path='/*/cfp' component={CommunityPage}/>
                    <Route exact path='/login' component={LoginPage}/>
                    <Route exact path='/signup' component={SignupPage}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </div>
        )
    };
}

export default App;
