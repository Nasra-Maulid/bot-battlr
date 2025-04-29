function BotSpecs({ bot, back, enlistBot }) {
    return (
      <div className="bot-specs">
        <div className="specs-container">
          <div className="specs-image">
            <img src={bot.avatar_url} alt={bot.name} />
          </div>
          <div className="specs-details">
            <h2>{bot.name}</h2>
            <p className="catchphrase">{bot.catchphrase}</p>
            <div className="specs-stats">
              <div><span>Health:</span> {bot.health}</div>
              <div><span>Damage:</span> {bot.damage}</div>
              <div><span>Armor:</span> {bot.armor}</div>
              <div><span>Class:</span> {bot.bot_class}</div>
            </div>
            <div className="specs-buttons">
              <button onClick={back} className="back-btn">Back</button>
              <button onClick={() => enlistBot(bot)} className="enlist-btn">Enlist</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default BotSpecs;