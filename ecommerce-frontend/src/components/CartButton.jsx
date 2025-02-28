import React from 'react';
import './cartbutton.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function CartButton() {
  const { order, fetchCart } = useCart();

  return (
    <Link to="/cart">
      <button className="cart-button" onClick={fetchCart}>
        <FontAwesomeIcon icon={faShoppingCart} /> Panier {"(" + (order ? order.order_items.length : 0) + ")"}
      </button>
    </Link>
  );
}

export default CartButton;
