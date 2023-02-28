const Person = ({ person }) => {
    return (
      <p>{person.name} {person.number}</p>
    )
  }

  const Persons = (props) => {
    return (
      <div>
      {props.filteredpersons.map(person => 
          <Person key={person.name} person={person}/>
        )}
      </div>
    )
  }


export default Persons