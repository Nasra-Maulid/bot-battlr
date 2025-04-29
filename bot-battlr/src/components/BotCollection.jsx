import BotCard from './BotCard';

function BotCollection({ bots, selectBot, dischargeBot }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-grid">
        {bots.map(bot => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            selectBot={selectBot} 
            dischargeBot={dischargeBot} 
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;