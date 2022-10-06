import { useStore } from "../utils/store"
import React from 'react'

const Stats = () => {
  const {
    all: [all]
  } = useStore()

  return (
    <div className="d-flex justify-content-between m-2">
      <h1>Item list</h1>
      <h2>{all.length} posts, {all.filter(post => post.liked).length} likes</h2>
    </div>
  )
}

export default Stats