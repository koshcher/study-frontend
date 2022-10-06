const ColorBtn = ({ setColor }) => {
  const rand = () => Math.random() * 255

  const colorize = () => {
    setColor(`rgb(${rand()}, ${rand()}, ${rand()})`)
  }

  return (
    <button onClick={colorize}>generate color</button>
  )
}

export default ColorBtn