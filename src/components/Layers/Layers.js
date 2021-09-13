import React, {Component} from 'react';
import './Layers.css';

class Layers extends Component{
    constructor(props){
        super(props);
            }
        
    render(){
        return(
            <div>    
            <i className="fas fa-th" onClick={()=>this.props.orientation()}></i>
            <i className="fas fa-align-justify"onClick={()=>this.props.orientation()}></i> 
            </div>
            );
        }   }
export default Layers;

