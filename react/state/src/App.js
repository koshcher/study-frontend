import './App.css';
import CounterClass from './components/CounterClass';
import MagicBall from './components/MagicBall';
import Color from './components/Color';
import TrafficLight from './components/TrafficLight';
import Rand from './components/Rand';

function App() {
  return (
    <div className="col">
      <TrafficLight />
      <Rand min={10} max={100} />
      <CounterClass />
      <MagicBall />
      <Color />
    </div >
  );
}

export default App;
