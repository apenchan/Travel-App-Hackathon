import React from 'react';


    class FilterForm extends React.Component {
        constructor(props) {
         super(props);
         this.filterEvents = this.filterEvents.bind(this)
         
        }
         


        filterEvents(e){
            console.log(this.props.events.address)
            var events  =  this.props.events
            events.forEach(function(event){
                if(event.address.toLowerCase().startsWith(e.target.value.toLowerCase())){
                    event.isShown = true
                } else{
                    event.isShown = false
                   console.log(event.address)
                }
            })
            this.props.setEvents(events)
        }
    
    
        

     render(){
         return(
             <input onChange={this.filterEvents}/>
         )
     }
    
}
    
  
export default FilterForm

