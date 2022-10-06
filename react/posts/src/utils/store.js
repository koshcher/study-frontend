import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'

const Context = createContext()

const StoreProvider = ({ children }) => {
  const [all, setAll] = useState([])
  const [isLiked, setIsLiked] = useState(false)
  const [startWith, setStartWith] = useState("")

  const loadLocal = () => {
    const allStr = localStorage.getItem("all")
    if (allStr != null) {
      setAll(JSON.parse(allStr))
    }
  }

  const loadApi = async () => {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())

    setAll(posts.map(post => ({ id: post.id, content: post.title, liked: false })))
  }

  // load posts
  useEffect(() => {
    loadApi().catch(console.error)
  }, [])

  // write to local storage on update
  useEffect(() => localStorage.setItem("all", JSON.stringify(all)), [all])

  return (
    <Context.Provider value={{
      all: [all, setAll],
      isLiked: [isLiked, setIsLiked],
      startWith: [startWith, setStartWith],
    }}>
      {children}
    </Context.Provider>
  )
}

const useStore = () => useContext(Context)

export { useStore, StoreProvider }