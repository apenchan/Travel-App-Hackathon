import React from 'react';
import ReactDom from 'react-dom';
// import Header from './common/Header';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';

class AppWrapper extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
         {/* <Header/>  */}
          <div className="container">
            <Routes/>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

ReactDom.render(
  <AppWrapper/>, document.getElementById('react-app'));
