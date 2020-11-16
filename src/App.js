import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import About from './components/About/About';
import LoginPage from './components/Login/LoginPage';
import SignupPage from './components/Signup/SignupPage';
import CommunityPage from './components/Community/CommunityPage';
import CommunitiesListPage from './components/CommunitiesList/CommunitiesListPage';
import RequestListPage from './components/RequestList/RequestListPage';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RequestList from './components/RequestList/RequestList';

const Page = () => {
    return (
      <>
        <Header/>
        <main>
            <Sidebar/>
            <RequestList/>
        </main>
      </>
    )
}

class App extends Component {
    render() {
        return(
            <div className='App'>
                <Switch>
                    <Route exact path='/' component={Page}/>
                    <Route exact path='/*/cfp' component={CommunityPage}/>
                    <Route exact path='/login' component={LoginPage}/>
                    <Route exact path='/signup' component={SignupPage}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/communities' component={CommunitiesListPage}/>
                    <Route exact path='/*\/requests' component={RequestListPage}/>
                    {/*<Route exact path='/communities/*\/edit' component={EditPage}/>*/}
                </Switch>
            </div>
        )
    };
}

export default App;
