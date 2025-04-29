function BotCard({ bot, selectBot, dischargeBot }) {
  return (
    <div className="bot-card" onClick={() => selectBot(bot)}>
      <div className="bot-image">
        <img src={bot.avatar_url} alt={bot.name} />
      </div>
      <div className="bot-info">
        <h3>{bot.name}</h3>
        <p className="catchphrase">{bot.catchphrase}</p>
        <div className="bot-stats">
          <span>{bot.health} ❤️</span>
          <span>{bot.damage} ⚔️</span>
          <span>{bot.armor} 🛡️</span>
        </div>
      </div>
      <button 
        className="discharge-btn" 
        onClick={(e) => {
          e.stopPropagation();
          dischargeBot(bot);
        }}
      >
        x
      </button>
    </div>
  );
}

export default BotCard;