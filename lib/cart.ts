export type CartItem = {
  id: number;
  slug: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

const CART_KEY = "sofmebel_cart";

export const getCartItems = (): CartItem[] => {
  if (typeof window === "undefined") return [];

  const raw = localStorage.getItem(CART_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as CartItem[];
  } catch {
    return [];
  }
};

export const saveCartItems = (items: CartItem[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(items));
};

export const addToCart = (item: CartItem) => {
  const items = getCartItems();

  const existingItem = items.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    items.push(item);
  }

  saveCartItems(items);
};

export const removeFromCart = (id: number) => {
  const items = getCartItems().filter((item) => item.id !== id);
  saveCartItems(items);
};

export const updateCartItemQuantity = (id: number, quantity: number) => {
  const items = getCartItems().map((item) =>
    item.id === id ? { ...item, quantity } : item
  );
  saveCartItems(items);
};

export const clearCart = () => {
  saveCartItems([]);
};