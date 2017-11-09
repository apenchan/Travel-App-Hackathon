import React from 'react';
import Homepage from './Homepage'
// import {Button, Icon} from 'react-materialize'



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
// export default () => (
// 	<Button waves='light'>
// 		<Icon>thumb_up</Icon>
// 	</Button>
// )
export default App;