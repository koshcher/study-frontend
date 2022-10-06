import { useEffect, useState } from "react"

const Timer = (...props) => {
  const [time, setTime] = useState(0)

  setTimeout(() => setTime(time + 1), 1000)

  const resetTime = () => {
    alert("NO RESET!!!")
  }

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={resetTime}>Reset</button>
    </div>
  )
}

export default Timer