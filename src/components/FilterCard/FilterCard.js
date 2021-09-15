import React, { Component } from 'react';

class FilterCard extends Component{
    constructor(props){
        super(props);
        this.state={
            filterBy: ''
        }
        }
      submit(e){
        e.preventDefault();
        console.log('No enviar');
      }
      cambios(e){
        this.setState({
          filterBy: e.target.value 
        }, ()=>this.props.filtrarPeliculas(this.state.filterBy)
        );
      }
    
    render(){
      
        return(
            <form onSubmit={this.submit} >
                        <input type="text" 
                         name="search"
                         placeholder="Search"
                         onChange={(e)=>this.cambios(e)}
                         //value= {this.state.filterBy}
                         />
                        <div className="lupa">
                        <i class="fas fa-search"></i>
                        
                        </div>
                        
            </form>
            )
    }
}
export default FilterCard;