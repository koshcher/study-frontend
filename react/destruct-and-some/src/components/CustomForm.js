import { useRef, useState } from "react";
//import '../App.css'

const CustomForm = () => {
  const [text, setText] = useState('enter text')
  const textInput = useRef()

  const sendMessage = (event) => {
    // not refresh
    event.preventDefault();

    alert(text)
    alert(textInput.current.value)
  }

  const handleChange = (even) => setText(even.target.value)


  return (
    <form onSubmit={sendMessage}>
      <input onChange={handleChange} />
      <input ref={textInput} />
      <input type='submit' />
    </form>
  )
}

export default CustomForm