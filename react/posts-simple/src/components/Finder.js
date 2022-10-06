const Finder = ({ start, setStart }) => {
  const update = (e) => {
    setStart(e.target.value)
  }
  return (
    <input value={start} onChange={update} className="form-control m-2" />
  )
}

export default Finder