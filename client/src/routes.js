import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './';
import Page404 from './common/404';
import DetailsEvent from './DetailsEvent';
import { Switch, Route, Redirect } from 'react-router-dom';


const Routes = () => (
    <div className="container">
        <Switch>
            <Route name="homepage" exact path='/' component={Homepage} />
            <Route exact path="/moreDetails/:eventId" component={DetailsEvent} />
            <Route component={Page404} />
        </Switch>
    </div>
)
export default Routes;
