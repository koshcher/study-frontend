const Item = ({ content, liked, like, remove }) => {
  return (
    <div className="card m-2">
      <div className="card-body p-2 d-flex justify-content-between">
        <div className="card-title d-flex  align-items-center m-0 ms-2">
          {content}
        </div>
        <div>
          <button onClick={like} className="btn btn-outlined-dark"><i className={liked ? "bi bi-heart-fill text-danger" : "bi bi-heart text-danger"}></i></button>
          <button onClick={remove} className="btn btn-outlined-dark"><i className="bi bi-trash3"></i></button>
        </div>
      </div>
    </div>
  )
}

const ItemList = ({ items, like, remove }) => {
  return (
    <div>
      {items.map((item, i) => <Item like={() => like(i)} remove={() => remove(i)} {...item} key={i} />)}
    </div>
  )
}

export default ItemList