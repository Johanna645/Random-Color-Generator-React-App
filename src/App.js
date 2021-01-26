import { useState } from 'react';
import './App.css';
import randomize from './randomize.js';
/*import randomColor from 'randomcolor';  to call it use randomcolor() */

function App() {
  const [boxColor, setBoxColor] = useState(
    'goldenrod',
  ); /*creating a state variable called boxColor*/
  return (
    <div>
      <header className="App-header">
        <h1 className="App">Random Color Generator</h1>
      </header>

      <div className="App-body">
        {/* prints out color: and the boxColor */}
        color: {boxColor};
        <br />
        <div className="App-box" style={{ backgroundColor: boxColor }}></div>
        <button className="App-button-hex"></button>
      </div>

      <footer className="App-footer">
        <button
          className="App-button"
          onClick={() => {
            const color = randomize(); /*setting value for color through randomize*/
            console.log(color);
            setBoxColor(color); /*updating the state variable*/
          }}
        >
          Randomize!
        </button>
      </footer>
    </div>
  );
}

export default App;
