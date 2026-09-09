import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = useCallback((product, qty = 1) => {
    const quantity = Math.max(1, Number(qty) || 1);

    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: Number(item.qty || 0) + quantity,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          price: Number(product.price) || 0,
          qty: quantity,
        },
      ];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQty = useCallback((id, qty) => {
    const quantity = Math.max(1, Number(qty) || 1);

    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: quantity,
            }
          : item
      )
    );
  }, []);

  const increaseQty = useCallback((id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: Number(item.qty || 0) + 1,
            }
          : item
      )
    );
  }, []);

  const decreaseQty = useCallback((id) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                qty: Number(item.qty || 1) - 1,
              }
            : item
        )
        .filter((item) => Number(item.qty) > 0)
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const isInCart = useCallback(
    (id) => items.some((item) => item.id === id),
    [items]
  );

  const cartCount = useMemo(() => {
    return items.reduce(
      (total, item) => total + Number(item.qty || 0),
      0
    );
  }, [items]);

  const cartTotal = useMemo(() => {
    return items.reduce(
      (total, item) =>
        total +
        Number(item.price || 0) * Number(item.qty || 0),
      0
    );
  }, [items]);

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQty,
    increaseQty,
    decreaseQty,
    clearCart,
    isInCart,
    cartCount,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside a <CartProvider>"
    );
  }

  return context;
};