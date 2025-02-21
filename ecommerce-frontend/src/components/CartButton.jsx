import React, { useState, useEffect } from 'react';
import './cartbutton.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function CartButton() {

  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/orders/cart`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': process.env.REACT_APP_USER_EMAIL,
        'X-User-Token': process.env.REACT_APP_USER_TOKEN
      }
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération de la commande');
      }
      return response.json();
    })
    .then((data) => {
      setOrder(data.order);
    })
    .catch((error) => {
    });
  }, []);

  return (
    <Link to="/cart">
      <button className="cart-button">
        <FontAwesomeIcon icon={faShoppingCart} /> Panier {"(" + (order ? order.order_items.length : 0) + ")"}
      </button>
    </Link>
  );
}

export default CartButton;
