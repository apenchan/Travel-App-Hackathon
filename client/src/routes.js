import React from 'react';
import Homepage from './';
import Page404 from './common/404';
import DetailsEvent from './DetailsEvent';
import LoginSignUp from './LoginSignUp';
// import UserProfileLink from './UserProfileLink';
// import Logout from './Logout';
import { Switch, Route, Redirect } from 'react-router-dom';


const Routes = () => (
    <div className="container">
        <Switch>
            <Route name="homepage" exact path='/' component={Homepage} />
            <Route exact path="/moreDetails/:eventId" component={DetailsEvent} />
            {/* <Route exact path="/profile/" component={UserProfileLink}/> */}
            <Route name="login" component={LoginSignUp} />
            {/* <Route name="logout" component={Logout} /> */}
            {/* <Route exact path="/moreDetails/:eventId" component={DetailsEvent} /> */}
            <Route component={Page404} />


        </Switch>
    </div>
)
export default Routes;

