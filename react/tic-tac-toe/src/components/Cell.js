const Cell = ({ val, check, i }) => {
  const checkClick = () => {
    if (val == null) {
      check(i)
    }
  }
  return (
    <div className="cell" onClick={checkClick}>{val}</div>
  )
}

export default Cell