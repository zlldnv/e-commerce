export const addItemToCart = (cartItems, cartItem) =>
  cartItems.find(({id}) => cartItem.id === id)
    ? cartItems.map(item => (item.id === cartItem.id ? {...item, quantity: item.quantity + 1} : item))
    : [...cartItems, {...cartItem, quantity: 1}];
