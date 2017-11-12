import React from 'react'


class FilterEvent extends React.Component{
  
    filterTheEvents(){          
      var list = this.props.events
    return list.filter(function(){
          list.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    }
   
    render(){
      return(
          <input type='text' onChange={this.filterTheEvents}/>
       )
      }

  }

  export default FilterEvent