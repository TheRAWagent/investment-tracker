import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button";
import Navbar from "./Components/Navbar/Navbar.js";
import {TechnicalAnalysis,MarketOverview} from 'react-tradingview-embed'
function App() {
  return (
    <div className="App">
      <h1 className="h1"><em>Investment Tracker</em></h1>
      <Navbar></Navbar>
      {/* <Button>Click me</Button> */}
      <header className="App-header">
        <image ></image>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TechnicalAnalysis widgetProps={{"symbol": "NSE:RELIANCE"}} ></TechnicalAnalysis>
        <MarketOverview ></MarketOverview>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
