import React from 'react';


    class FilterForm extends React.Component {
        constructor(props) {
         super(props);
         this.filterEvents = this.filterEvents.bind(this)
         
        }
         


        filterEvents(e){
            var events  =  this.props.events
            events.forEach(function(event){
                if(event.city.startsWith(e.target.value.toLowerCase())){
                    event.isShown = true
                } else{
                    event.isShown = false
                }
            })
            this.setState()
        }
    
    
        

     render(){
         return(
             <input onChange={this.filterEvents}/>
         )
     }
    
}
    
  
export default FilterForm

