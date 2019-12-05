export const addItemToCart = (cartItems, cartItem) =>
  cartItems.find(({id}) => cartItem.id === id)
    ? cartItems.map(item => (item.id === cartItem.id ? {...item, quantity: item.quantity + 1} : item))
    : [...cartItems, {...cartItem, quantity: 1}];

export const removeItemFromCart = (cartItems, cartItem) => {
  const existiingCartItem = cartItems.find(({id}) => cartItem.id === id);
  return existiingCartItem.quantity === 1
    ? cartItems.filter(cartItem => cartItem !== existiingCartItem.id)
    : cartItems.map(el => (cartItem.id === el.id ? {...el, quantity: el.quantity - 1} : el));
};
