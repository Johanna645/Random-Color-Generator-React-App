import { useState } from 'react';
import './App.css';
import randomize from './randomize.js';

function App() {
  const [boxColor, setBoxColor] = useState(
    'goldenrod',
  ); /* creating a state variable called boxColor*/

  return (
    <div>
      <header className="App-header">
        <h1 className="App">Random Color Generator</h1>
      </header>

      <section className="App-body">
        {/* prints out color: and the boxColor, removed color = {boxColor} so that it won't be printed twice*/}

        <br />
        <div className="App-box" style={{ backgroundColor: boxColor }} />
        <button className="App-button-hex">color: {boxColor};</button>
      </section>

      <footer className="App-footer">
        <button
          className="App-button"
          onClick={() => {
            const color = randomize(); /* setting value for color through randomize*/
            console.log(color);
            setBoxColor(color); /* updating the state variable*/
          }}
        >
          Randomize!
        </button>
      </footer>
    </div>
  );
}

export default App;
