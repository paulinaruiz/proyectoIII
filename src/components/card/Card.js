import React, {Component} from 'react';
import '../card/Card.css';
class Card extends Component{
    constructor(props){
        super(props);
       {/* this.state = {
            valor:0,
        } */}
    }
    render(){
        return(
            <div className='card'>
                <img src="#"/>
                <h1>Titulo:</h1>
                <h2>Descripcion: </h2>
            </div>
        );
    }
}
export default Card;