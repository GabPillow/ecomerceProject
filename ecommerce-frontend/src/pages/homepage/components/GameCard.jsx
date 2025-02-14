import '../homepage.css'
import { Link } from 'react-router-dom';

function GameCard({ game }) {
  return (
    <Link to={`/game/${game.id}`}>
      <div className='card-game'>
        <img src={`/images/${game.image}`} alt="" className="image"></img>
        <div className='title'>
          <div className='box-price'>
            {game.price}$
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GameCard;
