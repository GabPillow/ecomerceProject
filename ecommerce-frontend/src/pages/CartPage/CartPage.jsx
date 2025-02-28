import React, { useState, useEffect } from 'react';
import './cartpage.css';
import Loader from '../../components/Loader';
import { useCart } from '../../components/CartContext';

function CartPage() {
  const [order, setOrder] = useState(null);
  const [loadingCart, setLoadingCart] = useState(true);
  const { fetchCart } = useCart();

  const fetchOrder = () => {
    setLoadingCart(true);
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
      setLoadingCart(false);
    })
    .catch(() => setLoadingCart(false));
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const handlePaymentClick = () => {
    if (!order) return;

    fetch(`http://localhost:3000/api/v1/orders/${order.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': process.env.REACT_APP_USER_EMAIL,
        'X-User-Token': process.env.REACT_APP_USER_TOKEN
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour du statut de la commande');
      }
      return response.json();
    })
    .then(() => {
      setOrder(null);
      fetchOrder();
      fetchCart();
    })
    .catch(() => alert("Erreur lors de la mise à jour de la commande."));
  };

  const handleDestroyOrder = (orderId) => {
    fetch(`http://localhost:3000/api/v1/order_items/${orderId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': process.env.REACT_APP_USER_EMAIL,
        'X-User-Token': process.env.REACT_APP_USER_TOKEN
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur lors de la suppression de l\'article');
      }
      return response.json();
    })
    .then(() => {
      fetchOrder();
      fetchCart();
    })
    .catch((error) => console.error('Erreur lors de la suppression:', error));
  };

  const OrderCard = ({ order }) => (
    <div className='order-card'>
      <img src={`/images/${order.game_image}`} alt="" className="image" />
      <div className='order-info'>
        <div className='order-title'>{order.game_title}</div>
        <div className='order-price'>{order.game_price}$</div>
        <button className='delete-button' onClick={() => handleDestroyOrder(order.id)}>Supprimer</button>
      </div>
    </div>
  );

  return (
    <div className='cart-show'>
      {order && order.order_items.length > 0 ? (
        <>
          <div className='cart-title'>Votre panier</div>
          <div className='order-content'>
            <div className='order-list'>
              {!loadingCart ? (
                order.order_items.map((order_item) => (
                  <OrderCard key={order_item.id} order={order_item} />
                ))
              ) : (
                <Loader />
              )}
            </div>
            <div className='card-gotopayment'>
              <div className='total-price'>
                <div>Total estimé</div>
                <div className='total-price-number'>{order.total_price}$</div>
              </div>
              <p>Le montant de la taxe sur les ventes sera calculé au moment de l'achat, le cas échéant</p>
              <button className='paiement-button' onClick={handlePaymentClick}>Passer au paiement</button>
            </div>
          </div>
        </>
      ) : (
        <p>Pas de commande en cours</p>
      )}
    </div>
  );
}

export default CartPage;
