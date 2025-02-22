import React, { useState, useEffect } from 'react';
import GameCard from './components/GameCard'
import './homepage.css';
import Loader from '../../components/Loader';

function HomePage() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch('http://localhost:3000/api/v1/games')
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des jeux:', error);
      });
  }, []);

  return (
    <div className='homepage'>
      <div className='game-list'>
        {!isLoading && games.length > 0 ? (
          games.map((game) => (
            <GameCard game={game} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default HomePage;
