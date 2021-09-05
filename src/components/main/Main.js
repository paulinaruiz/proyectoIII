import React, {Component} from 'react';
import Card from '../card/Card';
import '../main/Main.css';

class Main extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
        console.log('did mount');
        {
            //fetch(url).....
        }
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