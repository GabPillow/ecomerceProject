import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [order, setOrder] = useState(null);

  const fetchCart = () => {
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
      console.error(error);
    });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ order, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};
