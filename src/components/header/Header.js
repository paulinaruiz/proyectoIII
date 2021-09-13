import React, {Component} from 'react';
import Layers from '../Layers/Layers';
import './Header.css';


class Header extends Component{
    constructor(){
        super();
       {/* this.state = {
            valor:0,
        } */}
    }
    render(){
        return(
            //Preguntar si hay que componetizar el header: por ej: buscador, sort.
    <div className=" header">
        <img className='imgHeader' src="img/descarga.png"/>
        
        <div className="iconosheader"> 
            <Layers changeOrientation={
            ()=> this.props.changeOrientation()}
            orientation= {this.props.orientation}/>
        </div>

        <div className="buscador">
             <form action="" >
                <input type="text" name="search" id="" placeholder="Search"/>
                <div className="lupa">
                <i class="fas fa-search"></i>
                
                </div>
                
            </form>
        </div>
        
    </div>
         
        );
    }
}
export default Header;