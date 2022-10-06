import { useEffect, useRef, useState } from "react"

const Timer = () => {
  const [run, setRun] = useState(false)
  const [sec, setSec] = useState(0)
  const secInput = useRef()

  const tick = () => {
    if (run && sec > 0) {
      setSec(sec - 0.1)
    }
  }

  useEffect(() => {
    setTimeout(tick, 100)
  })

  const start = () => {
    setSec(secInput.current.value)
    setRun(true)
  }

  const stop = () => {
    setRun(false)
    setTimeout(() => setSec(0), 100)
  }

  const toggle = () => {
    setRun(!run)
  }

  return (
    <div>
      <h1>{Math.round(sec)}</h1>
      <input ref={secInput} min={0} type={'number'} />
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={toggle}>pause/continue</button>
    </div>
  )
}

export default Timer