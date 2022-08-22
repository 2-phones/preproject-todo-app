import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [className, setClassName] = useState(true);
  const changeName = () => {
    setClassName(!className);
  };

  return (
    <div className="App">
      <header className={className ? 'App-header' : 'App-header2'}>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={changeName}>백그라운드변경</button>
      </header>
    </div>
  );
}

export default App;
