type Meal = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type CartItem = {
  meal: Meal;
  amount: number;
};

type DefaultCart = {
  items: CartItem[];
  totalAmount: number;
};

type UserData = {
  name: string;
  street: string;
  city: string;
  postal: string;
};

interface Cart extends DefaultCart {
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export type {
  Meal, CartItem, DefaultCart, Cart, UserData,
};
