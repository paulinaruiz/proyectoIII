import React, {Component} from 'react';
import '../card/Card.css';


class Card extends Component{
    constructor(props){
        super(props);
            this.state = {
                viewMore: false,
                text:'Ver más',
    }
    }
    viewMore(){
        if(this.state.viewMore){
            this.setState({
                viewMore: false,
                text: 'Ver más'
            })
        } else{
            this.setState({
                viewMore: true,
                text: 'Ver menos'
            })
        }
    }
   
    render(){
        return(
            <div className='card'>
                
                <h1>{this.props.datosPelicula.title}</h1>
                
                <p>{this.props.datosPelicula.vote_average}</p>

                <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Overview: {this.props.datosPelicula.overview} </p>
                
              
                <p className='more' onClick={()=>this.viewMore()}>{this.state.text}</p>

                <button onClick={(id)=> this.props.delete(this.props.datosPelicula.id)}>Borrar</button>

            </div>
        );
    }
}
export default Card;