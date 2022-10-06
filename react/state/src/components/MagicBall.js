import { useState } from "react"

const ANSWERS = [
  'It is certain', 'As I see it, yes', 'Reply hazy, try again', "Don't count on it", 'My reply is no',
  'Ask again later', 'Most likely', 'Yes definitely', 'Cannot predict now', 'Outlook not so good',
  'Very doubtful', 'My sources say no', 'Better not tell you now', 'Concentrate and ask again'
]


const MagicBall = () => {
  const [answer, setAnswer] = useState('Ask me something!')

  const giveAnswer = () => {
    const index = Math.floor(Math.random() * (ANSWERS.length))
    setAnswer(ANSWERS[index])
  }

  return (
    <>
      <h1>{answer}</h1>
      <button onClick={giveAnswer}>Give me answer</button>
    </>
  )
}

export default MagicBall