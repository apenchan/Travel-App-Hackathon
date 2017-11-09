import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainApp from './';
import Page404 from './common/404';
import {Switch, Route, Redirect} from 'react-router-dom';
// import Register from './Register'
// import Login from './Login'

const Routes = () => (
    <div className="container">
        <Switch>
            <Route name="home" exact path='/' component={MainApp} />
            {/* <Route exact path="/login" component={Register} /> */}
            <Route path="*" component={Page404}/>
        </Switch>
    </div>
)

export default Routes;
