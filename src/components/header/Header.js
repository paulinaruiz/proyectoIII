import React from 'react';
import Layers from '../layers/Layers';
import './Header.css';
import FilterCard from '../filterCard/FilterCard';



function Header(props){
    return(
                
        <header> 
        <div className=" header">
                <img className='imgHeader1' src="img/logox.jpeg"/>
                <img className='imgHeader' src="img/descarga.png"/>
            
                    <div className="iconosheader"> 
                        <Layers changeOrientation={
                        ()=> props.changeOrientation()}
                        orientation= {props.orientation}/>
                    </div>
                    <div className="buscador">
                        <FilterCard
                            filtrarPeliculas={(texto)=>props.filtrarPeliculas(texto)}/>
                    </div>
            
            </div>
        </header>
            
    );
    
}
export default Header;