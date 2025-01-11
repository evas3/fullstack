import { useState, useEffect } from 'react'
import { People } from "./People"
import { NewPerson } from "./NewPerson"
import { Filter } from "./Filter"
import { Notification } from "./Notification"
import contactService from "./services/contacts"

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [showAll, setShowAll] = useState(true)
  const [newFilter, setNewFilter] = useState("")
  const [message, setMessage] = useState(null)

  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
    }, [])

  const addNote = () => {
    const personObject = {
      id: String(persons.length + 1),
      name: newName,
      number: newNumber
    }
    contactService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName("")
        setNewNumber("")
      })
    setMessage("Added " + newName)
    setTimeout(() => {
      setMessage(null)
    }, 3000)
  }
  
  const notSame = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      if (confirm(newName + " is already added to phonebook. Do you want to replace the old number with a new one?")) {
        changeNumber(newName)
      }
      return;
    }
    addNote();
  }

  const changeNumber = (name) => {
    const person = persons.find(n => n.name === name)
    console.log(person)
    const change = { ...person, number: newNumber }
    console.log(change)

    contactService
      .update(person.id, change)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.name !== name ? person : returnedPerson))
        setNewName("")
        setNewNumber("")
      })
      .catch(error => {
        setMessage(
          "Error: " + name + " was already deleted from the server"
        )
        setTimeout(() => {
          setMessage(null)
        }, 3000)
        setPersons(persons.filter(person => person.name !== name))
      })
  }

  const deletoidaan = (persond) => {
    if (confirm("Delete " + persond.name + "?")) {
      
      contactService
        .deletoi(persond.id)
        .then(() => {
          setPersons(persons.filter(person => person.name !== persond.name))
        })
    }
  }

const peopleToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(newFilter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter newFilter={newFilter} setShowAll={setShowAll} setNewFilter={setNewFilter} />
      <h2>Add new</h2>
      <NewPerson newName={newName} setNewName={setNewName} notSame={notSame} newNumber={newNumber} setNewNumber={setNewNumber} />
      <h2>Numbers</h2>
      <People peopleToShow={peopleToShow} deletoi={deletoidaan}/>
    </div>
  )

}

export default App
