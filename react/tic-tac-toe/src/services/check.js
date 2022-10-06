const checkHorizontal = (board) => {
  for (let i = 0; i < 7; i += 3) {
    const first = board[i]
    if (first == null) continue

    if (first == board[i + 1] && first == board[i + 2]) return true
  }
  return false
}

const checkVertical = (board) => {
  for (let i = 0; i < 3; ++i) {
    const first = board[i]
    if (first == null) continue

    if (first == board[i + 3] && first == board[i + 6]) return true
  }
  return false
}

const checkDiagonals = (board) => {
  const middle = board[4]
  if (middle == null) return false

  if (board[0] == middle && middle == board[8]) return true
  if (board[2] == middle && middle == board[6]) return true

  return false
}

// board 
//[0, 1, 2,
// 3, 4, 5,
// 6, 7, 8]
const isWin = (board) => {
  return checkHorizontal(board) || checkVertical(board) || checkDiagonals(board)
}

const canGo = (board) => {
  for (let i = 0; i < board.length; ++i) {
    if (board[i] == null) return true
  }
  return false
}

export { isWin, canGo }