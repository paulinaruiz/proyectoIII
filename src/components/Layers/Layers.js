import React, {Component} from 'react';
import './Layers.css';

function Layers (props){


        
        
        
    
        console.log(props.orientation);
        if( props.orientation === true){
        return(

        <div>
            <i className= ' fas fa-th' onClick={()=> props.changeOrientation()}/>
            <i className= 'fas fa-align-justify color' />
        </div>
        ); 
        } else {
            
              return(

                <div> 
                    <i className= 'fas fa-th color ' />
                    <i className= 'fas fa-align-justify' onClick={()=> props.changeOrientation()}/>
                </div>
                ); 
          
        }   
    }
export default Layers;

