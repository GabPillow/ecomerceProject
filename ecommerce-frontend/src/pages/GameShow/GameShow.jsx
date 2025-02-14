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

  const TextInfo = ({title, text}) => {
    return (
      <div className='text-box'>
        <div className='title'>{title}</div>
        <div className='text'>{text}</div>
      </div>
    )
  };


  return (
    <div className='game-show'>
      {game && (
        <>
          <div className='title'>{game.title}</div>
          <div className='game-presentation'>
            <img src={`/images/${game.image}`} alt="" className="image"></img>
            <div className='description'>
              <div className='text'>
                {game.description}
              </div>
              <TextInfo title={"REVIEWS:"} text={game.rating}/>
            </div>
          </div>
          <div className='game-info'>
            <div className='info-left'>
              <div className='info-box'>
                <div className='title'>
                  Acheter {game.title}
                </div>
                <div className='buy-box'>
                  <div className='price'>
                    {game.price}
                  </div>
                  <div className='buy-button'>Ajouter au panier</div>
                </div>
              </div>
            </div>
            <div className='info-right'>
              <div className='info-box'>
                <TextInfo title={"TITRE:"} text={game.title}/>
                <TextInfo title={"EDITEUR:"} text={game.publisher}/>
                <TextInfo title={"DEVELOPPEUR:"} text={game.developer}/>
                <TextInfo title={"DATE DE SORTIE:"} text={game.release_date}/>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )

}

export default GameShow;
