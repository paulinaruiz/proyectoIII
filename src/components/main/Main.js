import React, {Component} from './node_modules/react';
import Card from '../Card/Card';
import './Main.css';

class Main extends Component{
    constructor(props){
        super(props)
       
    }
   
   
    render(){
        return(
        <div className="bodytarjeta">

        
            <div className="tarjeta">
                {
                    this.props.cargando === false ?
                    <h2>Cargando...</h2> :
                    this.props.peliculas.map((pelicula)=>
                    <Card
                    key ={ pelicula.id }
                    datosPelicula = {pelicula}
                    delete={
                        (peliculaBorrar)=>this.props.deleteCard(peliculaBorrar)
                        /*paso un metodo como prop */
                    }
                    />
                    )
                }
              
                
                
            </div>
            <div className='bot'>
                <button onClick = {()=>this.props.addMore()}>
                Mas peliculas
                </button>
                <button onClick = {()=>this.reset()}>  
                Reset
                </button>
            </div>
            </div>
        );

    }
}
export default Main;
