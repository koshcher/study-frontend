import { useState } from "react"

const ColorBtn = ({ setColor, color }) => {

  return (
    <button onClick={() => setColor(color)}
      style={{ backgroundColor: color, margin: '5px', padding: '10px', border: 'none' }}>
      {color}
    </button>
  )
}

const Color = () => {
  const [color, setColor] = useState('black')


  return (
    <div>
      <ColorBtn setColor={setColor} color='green' />
      <ColorBtn setColor={setColor} color='yellow' />
      <ColorBtn setColor={setColor} color='red' />

      <h2 style={{ color: color }}>Color text</h2>
    </div>
  )
}

export default Color