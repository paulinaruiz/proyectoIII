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

                <img className='imgCard' src={`https://image.tmdb.org/t/p/w500/${this.props.datosPelicula.poster_path}`} />
               <section className='info'> 
                        <h1>{this.props.datosPelicula.title}</h1>
                        
                        <p>{this.props.datosPelicula.vote_average}</p>

                        <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Overview: {this.props.datosPelicula.overview} </p>
                </section>        
              <div className='buttons'>
                <button className='more' onClick={()=>this.viewMore()}>{this.state.text}</button>

                <button className='delete' onClick={(id)=> this.props.delete(this.props.datosPelicula.id)}>Delete</button>
              </div>
            </div>
        );
    }
}
export default Card;