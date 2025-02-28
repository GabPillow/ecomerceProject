import React, { useState, useEffect } from 'react';
import './cartpage.css';
import Loader from '../../components/Loader';

function CartPage() {
  const [order, setOrder] = useState(null);
  const [loadingCart, setLoadingCart] = useState(true);

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
      setLoadingCart(false)
    })
    .catch((error) => {
    });
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
    .catch((error) => {
      alert("Erreur lors de la mise à jour de la commande.");
    })
  };

  const handleDestroyOrder = ({orderId}) => {
    fetch(`http://localhost:3000/api/v1/order_items/${orderId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': process.env.REACT_APP_USER_EMAIL,
        'X-User-Token': process.env.REACT_APP_USER_TOKEN
      },
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Erreur lors de l\'ajout a la wishlist:', error);
      });
  };

  const OrderCard = ({order}) => {
    return (
      <div className='order-card'>
        <img src={`/images/${order.game_image}`} alt="" className="image"></img>
        <div className='order-info'>
          <div className='order-title'>{order.game_title}</div>
          <div className='order-price'>{order.game_price}$</div>
          <button className='delete-button' onClick={() => handleDestroyOrder({ orderId: order.id })}>Supprimer</button>
        </div>
      </div>
    )
  };

  return (
    <div className='cart-show'>
      {
        order && order.order_items.length > 0 ? (
          <>
            <div className='cart-title'>Votre panier</div>
            <div className='order-content'>
              <div className='order-list'>
                {!loadingCart && order.order_items.length > 0 ? (
                  order.order_items.map((order_item) => (
                    <OrderCard order={order_item} />
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
                <button className='paiement-button' onClick={handlePaymentClick}>Passer au paiment</button>
              </div>
            </div>
          </>
        ) : (
          <p>Pas de commande en cours</p>
        )
      }
    </div>
  );
}

export default CartPage;
