const Stats = ({ posts, likes }) => {
  return (
    <div className="d-flex justify-content-between m-2">
      <h1>Item list</h1>
      <h2>{posts} posts, {likes} likes</h2>
    </div>
  )
}

export default Stats