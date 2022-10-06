const Char = ({ char }) => {
  return (
    <div>
      {Object.entries(char).map(([key, val]) =>
        <div key={key}>{key}: {val ?? 'none'}</div>
      )}
    </div>
  )
}

export default Char