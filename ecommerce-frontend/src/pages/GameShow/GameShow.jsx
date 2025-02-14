import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './gameshow.css';

function GameShow() {
  const { id: gameId} = useParams();

  const [game, setGame] = useState(null);

  useEffect(() => {
    if (gameId) {
      fetch(`http://localhost:3000/api/v1/games/${gameId}`)
        .then((response) => response.json())
        .then((data) => {
          setGame(data);
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération du jeu:', error);
        });
    }
  }, [gameId]);

  return (
    <div>
      <p>{game.title}</p>
    </div>
  )

}

export default GameShow;
