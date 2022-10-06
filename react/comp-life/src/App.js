import logo from './logo.svg';
import './App.css';
import { ToDo } from './components/ToDo';
import { useState } from 'react';
import { ToDoFunc } from './components/ToDoFunc';
import { Counter } from './components/Counter';
import Timer from './components/Timer';

function App() {
  const [vis, setVis] = useState(true)
  const toggle = () => setVis(!vis)

  const visToDo = vis && <ToDoFunc /> // <ToDo />

  return (
    <div className="App">
      <Timer />
      {visToDo}
      <button onClick={toggle}>toggle</button>
    </div>
  );
}

export default App;
