import { useEffect, useState } from "react"
import HttpService from "../utils/http"
import Char from "./Char"
import Error from "./Error"
import Spinner from "./Spinner"

const RndChar = () => {
  const [char, setChar] = useState({})
  const [status, setStatus] = useState()

  useEffect(() => {
    setStatus('loading')
    const id = Math.floor(Math.random() * 255 + 1)
    // const id = 0
    const http = new HttpService()
    http.getCharecter(id)
      .then(({ name, culture, gender, born, died }) => {
        setChar({ name, culture, gender, born, died })
        setStatus('ready')
      })
      .catch(reason => {
        setChar({ 'not found': reason })
        setStatus('error')
      })
  }, [])

  return status === 'loading' ? <Spinner />
    : status === 'error' ? <Error />
      : <Char char={char} />
}

export default RndChar