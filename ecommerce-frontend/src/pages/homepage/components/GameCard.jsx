import '../homepage.css'
import { Link } from 'react-router-dom';

function GameCard({ game }) {

  const handleAddToCart = (event) => {
    event.preventDefault()

    fetch('http://localhost:3000/api/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': process.env.REACT_APP_USER_EMAIL,
        'X-User-Token': process.env.REACT_APP_USER_TOKEN
      },
      body: JSON.stringify({ game_id: game.id })
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Erreur lors de l\'ajout au panier:', error);
      });
  };

  return (
    <Link to={`/game/${game.id}`}>
      <div className='card-game'>
        <img src={`/images/${game.image}`} alt="" className="image"></img>
        <div className='title'>
          <button onClick={handleAddToCart}>
            Ajouter au panier
          </button>
          <div className='box-price'>
            {game.price}$
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GameCard;
