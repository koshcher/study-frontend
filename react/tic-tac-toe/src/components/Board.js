import { useEffect, useState } from "react"
import { canGo, isWin } from "../services/check"
import './Board.css'
import Cell from "./Cell"


const Board = () => {
  // player may be X or O
  const [player, setPlayer] = useState('X')
  const [run, setRun] = useState(false)

  // board 
  //[0, 1, 2,
  // 3, 4, 5,
  // 6, 7, 8]
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null])
  const [message, setMessage] = useState('Ready to start?')

  const check = (i) => {
    if (run) {
      const newBoard = Array.from(board)
      newBoard[i] = player
      setBoard(newBoard);
      setPlayer(player === 'X' ? 'O' : 'X')
    }
  }

  const start = () => {
    setBoard([null, null, null, null, null, null, null, null, null])
    setRun(true)
  }


  useEffect(() => {
    if (run) {
      if (isWin(board)) {
        setMessage(`Win: ${player == 'X' ? 'O' : 'X'}`)
        setRun(false)
      } else {
        if (canGo(board)) {
          setMessage(`Current: ${player}`)
        } else {
          setMessage('Nobody win')
        }
      }
    }
  }, [board])

  return (
    <div>
      <h1>{message}</h1>
      <div className="board">
        {board.map((val, i) => <Cell key={i} i={i} check={check} val={val} />)}
      </div>
      <button onClick={start} className='btn'>Start</button>
    </div>
  )
}

export default Board