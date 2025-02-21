import React, { useState, useEffect } from 'react';
import GameCard from './components/GameCard'
import './homepage.css';
import CartButton from '../../components/CartButton';

function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/games')
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des jeux:', error);
      });
  }, []);

  return (
    <div className='homepage'>
      <CartButton />
      <div className='game-list'>
        {games.length > 0 ? (
          games.map((game) => (
            <GameCard game={game} />
          ))
        ) : (
          <p>Chargement des jeux...</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
