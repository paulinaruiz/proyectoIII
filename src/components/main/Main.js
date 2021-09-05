import React, {Component} from 'react';
import Card from '../card/Card';
import '../main/Main.css';

function Main(){
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
export default Main;