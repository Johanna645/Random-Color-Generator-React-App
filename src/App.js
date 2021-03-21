import { useState } from 'react';
import './App.css';
import randomize from './randomize.js';

function App() {
  const [boxColor, setBoxColor] = useState(
    'goldenrod',
  ); /* creating a state variable called boxColor*/

  return (
    <div>
      <header className="app-header">
        <h1 className="app">Random Color Generator</h1>
      </header>

      <section className="app-body">
        {/* prints out color: and the boxColor, removed color = {boxColor} so that it won't be printed twice*/}

        <br />
        <div className="app-box" style={{ backgroundColor: boxColor }} />
        <button className="app-button-hex">color: {boxColor}</button>
        <button
          className="app-button-hex"
          onClick={() => {
            const color = randomize(); /* setting value for color through randomize*/

            setBoxColor(color); /* updating the state variable*/
          }}
        >
          Randomize!
        </button>
      </section>

      <footer className="app-footer" />
    </div>
  );
}

export default App;
