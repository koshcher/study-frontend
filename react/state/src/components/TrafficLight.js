import { useState } from "react"

const Light = ({ color }) => {
  return (
    <div style={{ backgroundColor: color, height: '100px', width: '100px', border: '1px solid black' }}></div>
  )
}

const LIGHTS = [
  {
    red: 'red',
    yellow: 'white',
    green: 'white',
  },
  {
    red: 'white',
    yellow: 'yellow',
    green: 'white',
  },
  {
    red: 'white',
    yellow: 'white',
    green: 'green',
  },
]

const TrafficLight = () => {
  const [light, setLight] = useState(0)

  setTimeout(() => {
    if (light !== LIGHTS.length - 1) {
      setLight(light + 1)
    } else {
      setLight(0)
    }
  }, 1000)

  return (
    <>
      <Light color={LIGHTS[light].red} />
      <Light color={LIGHTS[light].yellow} />
      <Light color={LIGHTS[light].green} />
    </>
  )
}

export default TrafficLight