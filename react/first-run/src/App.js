import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import Person from './components/Person';
import Cat from './components/Cat';
import Rand from './components/Rand';
import Framework from './components/Framework';
import { useState } from 'react';
import ColorBtn from './components/ColorBtn';

function App() {
  const [fontColor, setFontColor] = useState('black')


  return (
    <div className='col' style={{ color: fontColor }}>
      <h1>My favourite backend framework</h1>
      <Framework name='ASP.NET CORE' creator='Microsoft' why='It can generate cool code and have cool performance' />

      <h1>My favourite frontend framework</h1>
      <Framework name='Next' creator='Vercel' why='It have different rendering types' />

      <ColorBtn setColor={setFontColor} />
    </div >
  );
}

export default App;
