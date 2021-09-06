import React, {Component} from 'react';
import Card from '../card/Card';
import '../main/Main.css';

class Main extends Component{
    constructor(){
        super()
        this.state={

            originales:[],
            peliculas:[],
            nexturl:"",
            cargando:false,

        }
    }
    componentDidMount(){
        console.log('did mount');
        let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US'
            fetch(url)
            .then(respuesta => respuesta.json())
            .then(data=>{ 
                this.setState({
                    originales:data.results, 
                    peliculas:data.results, 
                    cargando: true 
                })
                console.log(data);
            })
            .catch(err=> console.log(err))

       
    }
    render(){
        return(
        
            <div className="tarjeta">
                {
                    this.state.cargando === false ?
                    <h2>cargando</h2> :
                    this.state.peliculas.map((pelicula)=>
                    <Card
                    key ={ pelicula.id }
                    datosPelicula = { pelicula}/>
                    )
                }
              
                
                
            </div>
        );
    }
}
export default Main;
