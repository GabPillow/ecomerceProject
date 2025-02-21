import React, { useState, useEffect } from 'react';
import './orderspage.css';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

function OrdersPage() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/orders', {
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
      setOrders(data.orders);
    })
    .catch((error) => {
    });
  }, []);

  const OrderCard = ({order}) => {
    const OrderRow = ({name, price}) => {
      return (
        <div className='order-row'>
          <div className='order-row-name'>{name}</div>
          <div className='order-row-price'>{price}$</div>
        </div>
      )
    }

    return (
      <div className='orders-resumed-card'>
        <div className='order-date'>Commande du {format(new Date(order.updated_at), 'dd/MM/yy HH:mm')}</div>
        {order.order_items.map((item) => (
          <OrderRow name={item.game_title} price={item.game_price} />
        ))}
        <hr></hr>
        <OrderRow name={'Total de la commande'} price={order.total_price}/>
      </div>
    )
  };

  return (
    <div className='orders-page'>
      { orders && (
        <div className='orders-container'>
          <div className='orders-title'>Vos achats</div>
          <div className='orders-list'>
            {orders.length > 0 ? (
              orders.map((order) => (
                <OrderCard order={order} />
              ))
            ) : (
              <p>Chargement des commandes...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default OrdersPage;
