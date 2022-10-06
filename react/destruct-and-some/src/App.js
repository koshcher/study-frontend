import logo from './logo.svg';
import './App.css';
import Writers from './components/Writers';
import Towns from './components/Towns';
import CustomForm from './components/CustomForm';
import Personal from './components/Personal';
import Ins from './components/Ins';

function App() {
  return (
    <div className='app'>
      <Towns />
      {/* <Writers /> */}
      {/* <CustomForm /> */}
      <Personal />
    </div >
  );
}

export default App;
