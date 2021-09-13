import React, {Component} from 'react';
import './Layers.css';

class Layers extends Component{
    constructor(props){
        super(props);
            }
        
        
    render(){
        console.log(this.props);
        if( props.orientation === false){
        return(

        <div onClick={()=> this.props.changeOrientation()}>
            <i className= 'fas fa-th color'/>
            <i className= 'fas fa-align-justify'/>
        <div/>
        );
        } else {
            
              return(

                <div onClick={()=> this.props.changeOrientation()}>
                    <i className= 'fas fa-th color'/>
                    <i className= 'fas fa-align-justify'/>
                <div/>
                ); 
          
        }   }
export default Layers;

