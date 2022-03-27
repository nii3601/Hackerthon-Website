import './App.css';
import Home from './Pages/Home/Home';
import Leaderboard from './Pages/LeaderBoard/LeaderBoard';
import Navigator from './Components/Navigation/Navigation';
import Rules from './Pages/Rules/Rules';
import {Route, Routes} from 'react-router-dom';
import Parse from "parse";
import * as env from "./env.js";
import Footer from './Components/Footer/Footer';
import Dorm from './Pages/DormPage/Dorm';
import { useEffect } from 'react';
import { getDormScore } from './Services/getDormScore';
import {getSectionScore} from './Services/getCampusScore';
import Register from './Pages/Register/Register';

//initialise parse
Parse.initialize(env.APPLICATION_ID, env.JAVASCRIPT_KEY);
Parse.serverURL = env.SERVER_URL;

function App() {

  //just for testing
  useEffect(()=>{
    //testing get Dorm Score
    // getDormScore("Baumer").then((result)=>{
    //   console.log("Baumer Dorm Score Test:",result);
    // });
    //testing get section Score
    // getSectionScore("Baumer","4a").then((result)=>{
    //   console.log("Baumer 4A Score test:",result);
    // });
  },[]);

  return (
    <div className="App">
      <div className='content'>
      <Navigator/>
      
      <Routes>
        {/* for dorms */}
        <Route path="/info/:dorm" element={<Dorm/>}/>
        {/* For rules */}
        <Route path="/rules" element={<Rules/>}/> 
        {/* Leader board for specific dorm i.e sections */}
        <Route path="/leaderboard/:dormID" element={<Leaderboard/>}/> 
        {/* leaderboard for whole school */}
        <Route exact path="/leaderboard/" element={<Leaderboard/>}/>
        {/* leaderboard for whole school */}
        <Route exact path="/register/" element={<Register/>}/>
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
