
import React from 'react';
import Person from './Person/Person';

const persons=(props)=> props.persons.map( ( person, index ) => {//esta exportando a App, por lo que aca la funcion persons (escrita por max como const persons) funciona como constructor
return <Person
    click={() => props.clicked( index )} //esta exportando a App, por lo que aca la funcion persons (escrita por max como const persons) funciona como constructor
    name={person.name}//esta instanciando, porque los importa desde Person
    age={person.age}//los importa desde Person, porque los importa desde Person
    key={person.id}//los importa desde Person, porque los importa desde Person
    changed={( event ) => props.changed( event, person.id )} />  //esta exportando a App, por lo que aca la funcion persons (escrita por max como const persons) funciona como constructor
});



export default persons;