import { useState } from "react"

const Adder = ({ addItem }) => {
  const [text, setText] = useState("")

  const input = (event) => {
    setText(event.target.value)
  }

  const enter = (e) => {
    if (e.code === "Enter") {
      add()
    }
  }

  const add = () => {
    if (text.trim() !== "") {
      addItem(text)
    }
    setText("")
  }

  return (
    <div className="d-flex">
      <input value={text} onChange={input} onKeyUp={enter} className="form-control m-2" />
      <button onClick={add} className="btn btn-dark m-2">Add</button>
    </div>
  )
}

export default Adder