import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load initial cart from localStorage so it persists on refresh
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem('shopping-cart');
    return localData ? JSON.parse(localData) : [];
  });

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(cart));
  }, [cart]);

const AddtoCart = () => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.find((item) => item.id === product.id);

      if (isItemInCart) {
        // If it exists, increase the quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // If it's new, add it to the array with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    
    <div>
      <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
    </div>
  )
}
// Custom hook for easy access
export const useCart = () => useContext(CartContext);
export default AddtoCart
