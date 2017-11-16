import React from 'react';
import Homepage from './';
import Page404 from './common/404';
import DetailsEvent from './DetailsEvent';
import LoginSignUp from './LoginSignUp';
import Logout from './Logout';
import { Switch, Route, Redirect } from 'react-router-dom';


const Routes = () => (
    <div className="container-test">
        <Switch>
            <Route name="homepage" exact path='/' component={Homepage} />
            <Route path="/moreDetails/:eventId" component={DetailsEvent} />
            <Route name="logout" path='/logout' component={Logout} />
            <Route name="login" component={LoginSignUp} />
            <Route component={Page404} />


        </Switch>
    </div>
)
export default Routes;

