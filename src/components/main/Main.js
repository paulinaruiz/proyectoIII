import React, {Component} from 'react';
import Card from '../Card/Card';
import './Main.css';

class Main extends Component{
    constructor(props){
        super(props)
       
    }
   
   
    render(){
        return(
        <main className="bodytarjeta">

            <section className='contenedorTarjetas'>
            
                <div className={this.props.orientation ? 'lines':'tarjeta'}>
                    {
                        this.props.cargando === false ?
                        <h2>Cargando...&#128548;</h2> : (
                            this.props.peliculas.length === 0 ?(
                                <p className='noResults'>Sorry, no results were found for your search! 	&#128547;</p>
                            ):(
                                this.props.peliculas.map((pelicula)=>
                               
                                    <Card
                                    key ={ pelicula.id }
                                    datosPelicula = {pelicula}
                                    delete={
                                        (peliculaBorrar)=>this.props.deleteCard(peliculaBorrar)
                                       
                                        }
                                    /> 
                                )
                            ))
                    }
                </div>
                
            </section>
            <div className={this.props.peliculas.length === 0 ? 'hide':'bot'} >
                <button onClick = {()=>this.props.addMore()}>
                Add more
                </button>
                <button onClick = {()=>this.props.reset()}>  
                Reset
                </button>
            </div>
            </main>
        );

    }
}
export default Main;