import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Leaderboard from './Pages/LeaderBoard/LeaderBoard';
import Navigator from './Components/Navigation/Navigation';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navigator/>
      
      <Routes>
        {/* Leader board for specific dorm i.e sections */}
        <Route path="/leaderboard/:dorm" exact element={<Leaderboard hasDorm={true}/>}/> 
        {/* leaderboard for whole school */}
        <Route path="/leaderboard/" exact element={<Leaderboard hasDorm={false} />}/>
        <Route path="/" exact element={<Home/>} />
      </Routes>
      
    </div>
  );
}

export default App;
