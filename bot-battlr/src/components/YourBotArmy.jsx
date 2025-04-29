import BotCard from './BotCard';

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? (
        <p className="empty-army">No bots enlisted yet. Click on bots to add them to your army!</p>
      ) : (
        <div className="army-grid">
          {army.map(bot => (
            <div key={bot.id} className="army-bot">
              <BotCard bot={bot} selectBot={() => {}} />
              <button 
                className="release-btn" 
                onClick={() => releaseBot(bot)}
              >
                Release
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;