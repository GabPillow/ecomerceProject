import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './gameshow.css';
import Loader from '../../components/Loader';

function GameShow() {
  const { id: gameId} = useParams();

  const [game, setGame] = useState(null);
  const [loadingGame, setLoadingGame] = useState(true);

  useEffect(() => {
      if (gameId) {
        fetch(`http://localhost:3000/api/v1/games/${gameId}`)
          .then((response) => response.json())
          .then((data) => {
            setGame(data);
            setLoadingGame(false);
          })
          .catch((error) => {
            console.error('Erreur lors de la récupération du jeu:', error);
          });
      }
  }, [gameId]);

  const handleAddToCart = () => {
    fetch('http://localhost:3000/api/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': process.env.REACT_APP_USER_EMAIL,
        'X-User-Token': process.env.REACT_APP_USER_TOKEN
      },
      body: JSON.stringify({ game_id: gameId })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error('Erreur lors de l\'ajout au panier:', error);
      });
  };

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
      {!loadingGame && game ? (
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
                  <button className='buy-button' onClick={handleAddToCart}>
                    Ajouter au panier
                  </button>
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
      ) : (<Loader />)}
    </div>
  )

}

export default GameShow;
