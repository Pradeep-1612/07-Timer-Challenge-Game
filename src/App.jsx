import { useState } from 'react';
import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {

  const [playerName, setPlayerName] = useState('Gamer');

  return (
    <>
      <Player currentPlayerName={playerName} setPlayerName={($event)=>setPlayerName($event)} />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime="5" currentPlayerName={playerName}/>
        <TimerChallenge title="Hard" targetTime="10" currentPlayerName={playerName}/>
        <TimerChallenge title="Too hard" targetTime="15" currentPlayerName={playerName}/>
        <TimerChallenge title="Pros only" targetTime="20" currentPlayerName={playerName}/>
      </div>
    </>
  );
}

export default App;
