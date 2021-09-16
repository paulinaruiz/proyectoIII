import React, {Component} from 'react';
import Card from '../Card/Card';
import './Main.css';

class Main extends Component{
    constructor(props){
        super(props)
       
    }
   
   
    render(){
        return(
        <div className="bodytarjeta">

        
            <div className={this.props.orientation ? 'tarjeta':'lines'}>
                {
                    this.props.cargando === false ?
                    <h2>Cargando...</h2> : (
                        this.props.peliculas.length === 0 ?(
                            <p>No results were found for your search</p>
                        ): (
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

                    )

                 
            
                  
                    )
                }
              
                
                
            </div>
            <div className={this.props.peliculas.length === 0 ? 'hide':'bot'} >
                <button onClick = {()=>this.props.addMore()}>
                Mas peliculas
                </button>
                <button onClick = {()=>this.props.reset()}>  
                Reset
                </button>
            </div>
            </div>
        );

    }
}
export default Main;
