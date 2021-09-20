import React, {Component} from './node_modules/react';
import './Card.css';


class Card extends Component{
    constructor(props){
        super(props);
            this.state = {
                viewMore: false,
                text:'View more',
    }
    }
    viewMore(){
        if(this.state.viewMore){
            this.setState({
                viewMore: false,
                text: 'View more'
            })
        } else{
            this.setState({
                viewMore: true,
                text: 'View less'
            })
        }
    }
   
    render(){
        return(
                <div className='card'>
                        <img className='imgCard' src={`https://image.tmdb.org/t/p/w500/${this.props.datosPelicula.poster_path}`} />
                        <div>
                            <section className='info'> 
                                <h1>{this.props.datosPelicula.title}</h1>
                                
                                <p>{this.props.datosPelicula.vote_average}</p>

                                <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Overview: {this.props.datosPelicula.overview} </p>

                                <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Released at: {this.props.datosPelicula.release_date} </p>

                                <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Language: {this.props.datosPelicula.original_language} </p>
                            </section>        
                            <div className='buttons'>
                                <button className='more' onClick={()=>this.viewMore()}>{this.state.text}</button>

                                <button className='delete' onClick={(id)=> this.props.delete(this.props.datosPelicula.id)}>Delete &#10006;</button>
                            </div>
                        </div>
                </div>
               
           
        );
    }
}
export default Card;