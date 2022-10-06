import { useEffect, useState } from "react"

const ToDoFunc = () => {
  const [mas, setMas] = useState([2, 3, 4])

  const add = () => {
    const num = Math.floor(Math.random() * 100)
    setMas([...mas, num])
  }

  useEffect(() => {

    // when unmount
    return () => {
      //console.log("unmount")
    }
  }, [mas])

  // when unmount
  useEffect(() => {
    console.log("tsr")

    return () => {
      console.log("unmount")
    }
  }, [])

  return (
    <div>
      {mas.map((e, i) => <div key={i}>{e}</div>)}
      <button onClick={add}>add</button>
    </div>
  )
}

export { ToDoFunc }