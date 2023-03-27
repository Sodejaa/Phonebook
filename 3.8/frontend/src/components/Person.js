import React from 'react';
const Person = ({ person, deletePerson }) => {
    return (
      <p>{person.name} {person.number} <button onClick={() => {
        deletePerson(person.id)}}>delete</button></p>
    )
  }

  const Persons = (props) => {
    return (
      <div>
      {props.filteredpersons.map(person => 
          <Person key={person.name} person={person}
          deletePerson={props.deletePerson}/>
        )}
      </div>
    )
  }


export default Persons