import React from 'react';


    class FilterForm extends React.Component {
        constructor(props) {
         super(props);
         this.filterEvents = this.filterEvents.bind(this)
         
        }
         


        filterEvents(e){
            var events  =  this.props.events
            events.forEach(function(event){
                if(event.address.toLowerCase().startsWith(e.target.value.toLowerCase())){
                    event.isShown = true
                } else{
                    event.isShown = false

                }
            })
            this.props.setEvents(events)
        }
    
    
        

     render(){
         return(
            <div className="search-form">
            <input id="search-filter" placeholder="Search by Location" onChange={this.filterEvents}/>
            <i className="fa fa-search" aria-hidden="true"></i> 
            </div>
         )
     }
    
}
    
  
export default FilterForm

