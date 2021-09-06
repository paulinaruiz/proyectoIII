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
                console.log(data);
            })

       
    }
    render(){
        return(
        
            <div className="tarjeta">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
}
export default Main;