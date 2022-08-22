/* eslint-disable prettier/prettier */
import logo from './logo.svg';
import { useState } from 'react';
import { Appstyle } from './style';

function App() {
  const [className, setClassName] = useState(true);
  const [counts, setCount] = useState(0);
  const changeName = () => {
    setClassName(!className);
  };

  const btnCount = () => {
    setCount(counts + 1);
  };

  return (
    <Appstyle>
      <div className="App">
        <header className={className ? 'App-header' : 'App-header2'}>
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={changeName}>백그라운드변경</button>
          <button className="btn" onClick={btnCount}> counting </button>
          <div>{counts}</div>
        </header>
      </div>
    </Appstyle>
  );
}

export default App;
