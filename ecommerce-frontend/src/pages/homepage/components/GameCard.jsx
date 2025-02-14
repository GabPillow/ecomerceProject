import '../homepage.css'

function GameCard({ game }) {
  return (
    <div className='card-game'>
      <img src={`/images/${game.image}`} alt="" className="image"></img>
      <div className='title'>
        <div className='box-price'>
          {game.price}$
        </div>
      </div>
    </div>
  );
}

export default GameCard;
