import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import About from "./components/About/About";
import LoginPage from "./components/Login/LoginPage";
import SignupPage from "./components/Signup/SignupPage";
import CommunityPage from "./components/Community/CommunityPage";
import CommunitiesListPage from "./components/CommunitiesList/CommunitiesListPage";

class App extends Component {
    render() {
        return(
            <div className="App">
                <Switch>
                    <Route exact path='/*/cfp' component={CommunityPage}/>
                    <Route exact path='/login' component={LoginPage}/>
                    <Route exact path='/signup' component={SignupPage}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/communities' component={CommunitiesListPage}/>
                    {/*<Route exact path='/communities/*\/requests' component={RequestsPage}/>*/}
                    {/*<Route exact path='/communities/*\/edit' component={EditPage}/>*/}
                </Switch>
            </div>
        )
    };
}

export default App;
