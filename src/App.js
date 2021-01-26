//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <h1 className="App">Random Color Generator</h1>
      </header>

      <body className="App-body">
        <br />
        <box className="App-box"></box>
        <button className="App-button-hex">Hex-code</button>
      </body>

      <footer className="App-footer">
        <button className="App-button">Randomize!</button>
      </footer>
    </div>
  );
}

export default App;
