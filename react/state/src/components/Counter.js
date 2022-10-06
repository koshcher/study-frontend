import { useState } from "react"

const Counter = ({ increment, decrement }) => {
  const [count, setCount] = useState(0)

  const increase = () => setCount(count + increment)
  const decrease = () => {
    if (count > 0) {
      setCount(count - decrement)
    }
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default Counter