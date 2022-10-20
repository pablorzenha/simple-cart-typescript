import { createContext, ReactNode, useState } from "react";

export interface iProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}
interface iCartProps {
  children: ReactNode;
}

export interface iCartProviderData {
  cart: iProduct[];
  addProduct: (product: iProduct) => void;
  deleteProduct: (product: iProduct) => void;
}

const CartContext = createContext<iCartProviderData>({} as iCartProviderData);

export const CartProvider = ({ children }: iCartProps) => {
  const [cart, setCart] = useState<iProduct[]>([]);

  const addProduct = (product: iProduct) => {
    setCart([...cart, product]);
  };

  const deleteProduct = (productToBeDeleted: iProduct) => {
    const newCart = cart.filter(
      (product) => product.title !== productToBeDeleted.title
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
