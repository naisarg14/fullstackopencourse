import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h2>
      {text}
    </h2>
  )
}

const DisplayPerson = ({personObject}) => {
  return (
    <div>
      {personObject.name} - {personObject.number}
    </div>
  )
}

const DisplayPhonebook = ({persons}) => {
  if (persons.length === 0) {
    return (<div>No entries found in the phonebook. Add Entries or Remove Filter</div>)
  }
  return (
    persons.map(person => <DisplayPerson key={person.id} personObject={person} /> )
  )
}

const AddEntry = ({persons, setPersons, setNewFiltered}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const checkDuplicate = () => {
    persons.forEach((person) => {
      if (person.name === newName) {
        alert(`"${newName}" is already added to the phonebook.`)
      }
    })
  }

  const addNumber = (event) => {
    event.preventDefault()
    checkDuplicate()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
  
    setPersons(persons.concat(personObject))
    setNewFiltered(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <form onSubmit={addNumber}>
      <div>
        Name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        Number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}


const Filter = ({persons, setNewFiltered}) => {

  const [newFilter, setNewFilter] = useState('')

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    setNewFiltered(persons.filter(person => (person.name).includes(event.target.value)))
  }

  return (
    <div>
      Filter shown with <input value={newFilter} onChange={handleFilterChange} />
    </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newFiltered, setNewFiltered] = useState(persons)

  return (
    <div>
      <Header text={"Phonebook"} />
      <Filter persons={persons} setNewFiltered={setNewFiltered} />
      <Header text="Add New Entry" />
      <AddEntry persons={persons} setPersons={setPersons} setNewFiltered={setNewFiltered} />
      <Header text={"Numbers"} />
      <DisplayPhonebook persons={newFiltered} />
    </div>
  )

}

export default App