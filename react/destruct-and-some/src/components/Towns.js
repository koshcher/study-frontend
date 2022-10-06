import { useState } from "react"
import './Towns.css'

const Town = ({ updateName, updatePeople, id, name, people }) => {
  const [edit, setEdit] = useState(false)

  const toggleEdit = () => setEdit(!edit)

  const changeName = (e) => updateName(id, e.target.value)
  const changePeople = (e) => updatePeople(id, e.target.value)

  return (
    <div className='big row'>
      <input value={name} onChange={changeName} disabled={!edit} className='big in' />
      has
      <input value={people} onChange={changePeople} type={'number'} disabled={!edit} className='big in' />
      people
      <button onClick={toggleEdit} className='btn'>toggle</button>
    </div>
  )
}

const Towns = () => {
  const [towns, setTowns] = useState([
    { id: 1, name: 'Kramatorsk', people: 350000 },
    { id: 2, name: 'Kharkiv', people: 1433000 },
    { id: 3, name: 'Dnipro', people: 1000000 },
  ])

  const updateName = (id, newName) => {
    const newTowns = Array.from(towns)
    newTowns.find(town => town.id == id).name = newName
    setTowns(newTowns)
  }

  const updatePeople = (id, newPeople) => {
    const newTowns = Array.from(towns)
    newTowns.find(town => town.id == id).people = newPeople
    setTowns(newTowns)
  }

  return (
    <>
      {towns.map(town =>
        <Town key={town.id} {...town} updateName={updateName} updatePeople={updatePeople} />
      )}
    </>
  )
}

export default Towns