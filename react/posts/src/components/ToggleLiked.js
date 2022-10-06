import { useStore } from "../utils/store"
import React from 'react'

const ToggleLiked = () => {
  const {
    isLiked: [isLiked, setIsLiked]
  } = useStore()

  const toggle = () => setIsLiked(!isLiked)

  return (
    <div className="btn-group m-2" role="group">
      <button onClick={toggle} className={isLiked ? "btn btn-outline-dark" : "btn btn-dark"}>
        All
      </button>
      <button onClick={toggle} className={isLiked ? "btn btn-dark" : "btn btn-outline-dark"}>
        Liked
      </button>
    </div>
  )
}

export default ToggleLiked