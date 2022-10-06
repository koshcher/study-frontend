import { useState } from "react"

const towns = [
  'Kramatorsk', 'Kharkiv', 'Dnipro'
]

const Personal = () => {
  const [person, setPerson] = useState({
    name: 'name',
    phone: 0,
    email: 'email@gmail.com',
    town: 'town'
  })

  const [isChacked, setIsChecked] = useState(false)

  const submit = (e) => {
    e.preventDefault()

    if (person.name == '') {
      alert('Name can\'t be empty')
      return
    }

    alert(isChacked ? `CHECKED ${person.name}` : `UNCHECKED ${person.name}`)
  }

  const handleChack = () => {
    setIsChecked(!isChacked)
  }

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    })

  }

  return (
    <form onSubmit={submit}>
      <input value={person.name} name='name' onChange={handleChange} />
      <input type={'number'} value={person.phone} name='phone' onChange={handleChange} />
      <input type={'email'} value={person.email} name='email' onChange={handleChange} />
      <select value={person.town} onChange={handleChange} name='town'>
        {towns.map((town, i) => <option key={i} value={town}>{town}</option>)}
      </select>
      <input value={isChacked} type={'checkbox'} onChange={handleChack} />
      <input type={'submit'} />
    </form>
  )
}

export default Personal