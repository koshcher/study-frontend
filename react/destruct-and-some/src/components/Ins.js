import { useState } from "react"

// const ins = [
//   'c',
//   's',
//   't'
// ]

const In = ({ text, i, update }) => {
  const [edit, setEdit] = useState(false)

  const click = () => {
    setEdit(!edit)
  }

  const change = (e) => {
    update(i, e.target.value)
    //setText(e.target.value)
  }

  return (
    <li>
      <input value={text} onChange={change} disabled={!edit}></input>
      <button onClick={click}>change</button>
    </li>
  )
}

const Ins = () => {
  const [ins, setIns] = useState([
    'c',
    's',
    't'
  ])

  const updateIn = (i, newIn) => {
    const newIns = Array.from(ins)
    newIns[i] = newIn
    setIns(newIns)
  }

  return (
    <ul>
      {ins.map((text, i) => <In text={text} i={i} update={updateIn}></In>)}
    </ul>
  )
}

export default Ins