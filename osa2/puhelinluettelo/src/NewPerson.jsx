const NewPerson = ({newName, setNewName, notSame, newNumber, setNewNumber}) => {

    return (
        <form onSubmit={notSame}>
        <div>
          name: <input value={newName}
            onChange={e => setNewName(e.target.value)}
            />
        </div>
        <div>
          number: <input value={newNumber}
          onChange={f => setNewNumber(f.target.value)}
          />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
      </form>
    )
}

export { NewPerson };