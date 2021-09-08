import React, {Component} from 'react';
import Card from '../card/Card';
import '../main/Main.css';

class Main extends Component{
    constructor(props){
        super(props)
        this.state={

            originales:[],
            peliculas:[],
            nexturl:"",
            cargando:false,

        }
    }
    componentDidMount(){
        console.log('did mount');
        let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US&page=1'
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
    addMore(){
        let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US&page=2'
        //preguntar como hacer para cambiar la page
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(data => {
            this.setState({
                peliculas: this.state.peliculas.concat(data.results)
            })
        })
        .catch(err=> console.log(err))
        
    }
    reset(){
        this.setState({
            peliculas:this.state.originales
        })
       
    }
    deleteCard(id){
        console.log(id);
        const peliculasRestantes = this.state.peliculas.filter(pelicula=> pelicula.id != id)
      
        this.setState({
            peliculas: peliculasRestantes
            //le digo que agarre a todos los persoanjes y saque el que tiene el id que manda el componente hijo al hacer click
        })
    }
    render(){
        return(
        <div>

        
            <div className="tarjeta">
                {
                    this.state.cargando === false ?
                    <h2>Cargando...</h2> :
                    this.state.peliculas.map((pelicula)=>
                    <Card
                    key ={ pelicula.id }
                    datosPelicula = {pelicula}
                    delete={
                        (peliculaBorrar)=>this.deleteCard(peliculaBorrar)
                        /*paso un metodo como prop */
                    }
                    />
                    )
                }
              
                
                
            </div>
            <div className='bot'>
                <button onClick = {()=>this.addMore()}>
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
