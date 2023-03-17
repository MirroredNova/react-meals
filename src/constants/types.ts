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

interface Cart extends DefaultCart {
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

export type {
  Meal, CartItem, DefaultCart, Cart,
};
