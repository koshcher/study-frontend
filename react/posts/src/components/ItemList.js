import { useEffect, useState } from "react"
import { useStore } from "../utils/store"
import React from 'react'

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


const checkStartWith = (item, start) => item.content.startsWith(start)

const checkLiked = (item, start) => checkStartWith(item, start) && item.liked

const ItemList = () => {
  const {
    all: [all, setAll],
    startWith: [startWith, setStartWith],
    isLiked: [isLiked, setIsLiked]
  } = useStore()


  const [check, setCheck] = useState()

  useEffect(() => {
    if (isLiked) {
      setCheck({ run: checkLiked })
    } else {
      setCheck({ run: checkStartWith })
    }
  }, [isLiked])

  const remove = (id) => setAll(all.filter(item => item.id !== id))

  const like = (id) => setAll(all.map(item => item.id === id ? { ...item, liked: !item.liked } : item))

  return (
    <div>
      {all.filter(item => check.run(item, startWith))
        .map((item, i) => <Item
          like={() => like(item.id)}
          remove={() => remove(item.id)}
          {...item} key={i} />)}
    </div>
  )
}

export default ItemList