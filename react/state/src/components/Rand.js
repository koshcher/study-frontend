import { useState } from "react"

const Rand = ({ min, max }) => {
  const [num, setNum] = useState(0)

  const rand = () => {
    setNum(Math.floor(Math.random() * (max - min + 1) + min))
  }

  return (
    <>
      <h2>{num}</h2>
      <button onClick={rand}>Get random number</button>
    </>
  )
}

export default Rand