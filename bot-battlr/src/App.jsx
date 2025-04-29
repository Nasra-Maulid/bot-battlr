import { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => setBots(data))
      .catch(err => console.error('Error fetching bots:', err));
  }, []);

  const enlistBot = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
    setSelectedBot(null);
  };

  const releaseBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setBots(bots.filter(b => b.id !== bot.id));
      setArmy(army.filter(b => b.id !== bot.id));
      setSelectedBot(null);
    })
    .catch(err => console.error('Error deleting bot:', err));
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy 
        army={army} 
        releaseBot={releaseBot} 
        dischargeBot={dischargeBot} 
      />
      {selectedBot ? (
        <BotSpecs 
          bot={selectedBot} 
          back={() => setSelectedBot(null)}
          enlistBot={enlistBot}
        />
      ) : (
        <BotCollection 
          bots={bots} 
          selectBot={setSelectedBot} 
          dischargeBot={dischargeBot} 
        />
      )}
    </div>
  );
}

export default App;