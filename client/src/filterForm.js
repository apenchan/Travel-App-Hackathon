import React from 'react';

class FilterForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = this.props.events
      this.handleChange.bind(this)
    }
    handleChange(e){
        e.preventDefault()
      filteredEvents = this.state.filter((event) => {
        return event.toLowerCase().search(
          e.target.value.toLowerCase()) !== -1;
      });
      this.setState({ events: this.state.events.concat(filteredEvents)});
    }

    
      render(){
          return(
              <input type="text" />
          )
      }
    
}

export default FilterForm