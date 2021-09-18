import React, {Component} from 'react';
import Layers from '../Layers/Layers';
import './Header.css';
import FilterCard from '../FilterCard/FilterCard';


class Header extends Component{
    constructor(){
        super();
       
    }
    render(){
        return(
            //Preguntar si hay que componetizar el header: por ej: buscador, sort.
    <header> 
       <div className=" header">
            <img className='imgHeader' src="img/descarga.png"/>
          
                <div className="iconosheader"> 
                    <Layers changeOrientation={
                    ()=> this.props.changeOrientation()}
                    orientation= {this.props.orientation}/>
                </div>
                <div className="buscador">
                <FilterCard
                    filtrarPeliculas={(texto)=>this.props.filtrarPeliculas(texto)}/>
                </div>
         
        </div>
    </header>
         
        );
    }
}
export default Header;