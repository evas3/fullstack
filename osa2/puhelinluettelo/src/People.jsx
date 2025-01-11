const People = ({ peopleToShow, deletoi }) => {
    return (
      peopleToShow.map(person =>
          <div>
            <p key={person.id}>{person.name} {person.number}<button onClick={() => deletoi(person)}>delete</button></p>
          </div>
        )
    )
  }

export { People };