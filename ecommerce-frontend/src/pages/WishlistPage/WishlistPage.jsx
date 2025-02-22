import React, { useState, useEffect } from 'react';
import './wishlistpage.css';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

function WishlistPage() {

  const [wishlistItems, setWishlistItems] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/wishlist_items', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': process.env.REACT_APP_USER_EMAIL,
        'X-User-Token': process.env.REACT_APP_USER_TOKEN,
      }
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des commandes');
      }
      return response.json();
    })
    .then((data) => {
      setWishlistItems(data.wishlist);
      setUser(data.user)
    })
    .catch((error) => {
    });
  }, []);

  const WishlistCard = ({wishItem}) => {
    return (
      <div className='wishlist-card'>
        <img src={`/images/${wishItem.game.game_image}`} alt="" className="image-wishlist"></img>
        <div className='wishlist-info'>
          <div>{wishItem.game.game_title}</div>
        </div>
      </div>
    )
  };

  return (
    <div className='wishlist-page'>
      { wishlistItems && (
        <div className='wishlist-container'>
          <div className='wishlist-title'>{user.username} wishlist</div>
          <div className='wishlist-list'>
            {wishlistItems.length > 0 ? (
              wishlistItems.map((wishItem) => (
                <WishlistCard wishItem={wishItem} />
              ))
            ) : (
              <p>Chargement des jeux...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
