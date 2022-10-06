import { useStore } from "../utils/store"
import React from 'react'

const Finder = () => {
  const {
    startWith: [startWith, setStartWith]
  } = useStore()

  const update = (e) => setStartWith(e.target.value)

  return (
    <input value={startWith} onChange={update} className="form-control m-2" />
  )
}

export default Finder