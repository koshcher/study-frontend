const Framework = ({ name, creator, why }) => {
  return (
    <>
      <h2>{name} is created by {creator}</h2>
      <h3>I love it, because:</h3>
      <p>{why}</p>
    </>
  )
}

export default Framework