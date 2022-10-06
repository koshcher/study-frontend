import { useEffect, useState } from "react"
import HttpService from "../utils/http"
import Char from "./Char"
import Error from "./Error"
import Spinner from "./Spinner"


const CharList = () => {
  const http = new HttpService()

  const [chars, setChars] = useState([])
  const [status, setStatus] = useState()
  const [selectedChar, setSelectedChar] = useState({})

  useEffect(() => {
    setStatus('loading')
    http.getCharecters().then(data => {
      setChars(data)
      setStatus('ready')
    }).catch(() => {
      setStatus('error')
    })
  }, [])

  const select = (url) => {
    http.get(url)
      .then(async (data) => {
        let char = {
          name: data.name,
          gender: data.gender,
          born: data.born,
          died: data.died,
          books: ""
        }

        for (let i = 0; i < data.books.length; ++i) {
          const book = await http.get(data.books[i])
          char.books += `${book.name}, `
        }

        setSelectedChar(char)
      })
  }

  return status === 'loading' ? <Spinner />
    : status === 'error' ? <Error />
      : (
        <div style={{ display: 'flex' }}>
          <div style={{ width: '500px', display: 'flex', flexDirection: 'column' }}>
            {chars.map(char =>
              <button key={char.url}
                style={{ fontSize: '20px', margin: '5px', border: 'none', background: 'none' }}
                onClick={() => select(char.url)}>
                {char.name}
              </button>)
            }
          </div>
          <div>
            <Char char={selectedChar} />
          </div>
        </div>
      )
}

export default CharList