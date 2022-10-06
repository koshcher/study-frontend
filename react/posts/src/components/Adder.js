import { useState } from "react"
import { useStore } from "../utils/store"
import { v4 as uuid } from "uuid"
import React from 'react'


const Adder = () => {
  const [all, setAll] = useStore().all
  const [text, setText] = useState("")

  const input = (e) => setText(e.target.value)

  const enter = (e) => {
    if (e.code === "Enter") add()
  }

  const postToApi = (item) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        userId: 1, // just for something
        title: item.content,
        body: item.liked
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(item => item.json())
      .then(json => console.log(json))
  }

  const add = () => {
    if (text.trim() !== "") {
      const item = { id: uuid(), content: text, liked: false }
      setAll([...all, item])
      postToApi(item)
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