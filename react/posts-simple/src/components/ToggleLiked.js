const ToggleLiked = ({ chooseLiked, setLiked }) => {
  const toggle = () => {
    setLiked(!chooseLiked)
  }

  return (
    <div className="btn-group m-2" role="group">
      <button onClick={toggle} className={chooseLiked ? "btn btn-outline-dark" : "btn btn-dark"}>All</button>
      <button onClick={toggle} className={chooseLiked ? "btn btn-dark" : "btn btn-outline-dark"}>Liked</button>
    </div>
  )
}

export default ToggleLiked