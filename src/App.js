import './App.css';
import Home from './Pages/Home/Home';
import Leaderboard from './Pages/LeaderBoard/LeaderBoard';
import Navigator from './Components/Navigation/Navigation';
import {Route, Routes} from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigator/>
      
      <Routes>
        {/* Leader board for specific dorm i.e sections */}
        <Route path="/leaderboard/:dorm" element={<Leaderboard hasDorm={true}/>}/> 
        {/* leaderboard for whole school */}
        <Route exact path="/leaderboard/" element={<Leaderboard hasDorm={false} />}/>
        <Route path="/" exact element={<Home/>} />
      </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;
