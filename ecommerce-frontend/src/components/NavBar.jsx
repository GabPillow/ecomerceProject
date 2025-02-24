import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';

function NavBar() {

  const [query, setQuery] = useState("");
  const [games, setGames] = useState([]);

  const handleChange = async (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery) {
      const response = await fetch(`http://localhost:3000/api/v1/games/search?query=${searchQuery}`);
      const data = await response.json();
      setGames(data);
    } else {
      setGames([]);
    }
  };

  const NavLink = ({name, path}) => {
    return (
      <Link to={path} className="navlink">
        {name}
      </Link>
    )
  };

  return (
    <div className='navbar-container'>
      <div className="cartbutton-nav">
        <CartButton />
      </div>
      <div className='navbar'>
        <NavLink name={"Magasin"} path={"/"} />
        <NavLink name={"Commandes"} path={"/orders"}  />
        <NavLink name={"Wishlist"} path={"/wishlist"}  />
        <div className='search-block'>
          <input
            type="text"
            placeholder="Rechercher un jeu..."
            value={query}
            onChange={handleChange}
            className="search"
          />
          <div className='search-results'>
            {games.length > 0 && games.map((game) => (
              <Link to={`/game/${game.id}`} key={game.id} className="search-item" onClick={() => setQuery('')}>
                <img src={`/images/${game.image}`} alt={game.title} className="image-search" />
                <div>
                  <div className="price-title">{game.title}</div>
                  <div className="price-search">{game.price}$</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
