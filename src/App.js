import './App.css';
import Home from './Pages/Home/Home';
import Leaderboard from './Pages/LeaderBoard/LeaderBoard';
import Navigator from './Components/Navigation/Navigation';
import Rules from './Pages/Rules/Rules';
import {Route, Routes} from 'react-router-dom';
import Parse from "parse";
import * as env from "./env.js";
import Footer from './Components/Footer/Footer';

//initialise parse
Parse.initialize(env.APPLICATION_ID, env.JAVASCRIPT_KEY);
Parse.serverURL = env.SERVER_URL;

function App() {
  return (
    <div className="App">
      <div className='content'>
      <Navigator/>
      
      <Routes>
        {/* For rules */}
        <Route path="/rules" element={<Rules/>}/> 
        {/* Leader board for specific dorm i.e sections */}
        <Route path="/leaderboard/:dorm" element={<Leaderboard hasDorm={true}/>}/> 
        {/* leaderboard for whole school */}
        <Route exact path="/leaderboard/" element={<Leaderboard hasDorm={false} />}/>
        <Route path="/" exact element={<Home/>} />
      </Routes>
      </div>

      <div className="bottom">
        <Footer/>
      </div>
      
      
    </div>
  );
}

export default App;
