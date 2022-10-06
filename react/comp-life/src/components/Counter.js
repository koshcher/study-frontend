import { useEffect, useState } from "react"

const Counter = () => {
  const [time, setTime] = useState(new Date)

  useEffect(() => {
    setInterval(() => {
      setTime(new Date)
    }, 1000)
  })

  return (
    <div>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</div>
  )
}

export { Counter }