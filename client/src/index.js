import React from 'react';
import Homepage from './Homepage'

class App extends React.Component {
  render() {
    return (
      <div>
        <br/>
        {/* <Register createUser={this.createUser}/> */}
        <Homepage/>
      </div>
    );
  }
}

export default App;
