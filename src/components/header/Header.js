import React, {Component} from 'react';
import '../header/Header.css';
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
        <img src="img/descarga.png"/>
        
        <div className="iconosheader"> 
            <p>Ordenar ASC/ DESC</p>
            <i className="fas fa-th"></i>
            <i className="fas fa-align-justify"></i> 
        </div>

        <div> <form action="">
                <input type="text" name="search" id="" placeholder="Search"/>
                <button type="submit"><i class="fas fa-search"></i></button>
            </form>
        </div>
        
    </div>
         
        );
    }
}
export default Header;