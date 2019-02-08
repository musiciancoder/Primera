import React from 'react'
import './Cockpit.css';
import Radium, { StyleRoot } from 'radium';

const cockpit = (props)=>{


    //const assignedClasses = []; assigned classes en css modules en vez de classes en radium
    const classes = [];

    let btnClass = '';
    btnClass = classes.Red;
    if (props.showPersons){
        btnClass = classes.Red;
    }

    if ( props.persons.length <= 2 ) {
        classes.push( 'red' ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
        classes.push( 'bold' ); // classes = ['red', 'bold']
    }

    return (
        <div>
        <h1>Hi, Im a React App</h1>
        <p className={classes.join( ' ' )}>This is really working!</p>
    <button
        //style={style} //className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
        </div>

    );
};

export default cockpit;