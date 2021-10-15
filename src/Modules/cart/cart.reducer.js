let INITIAL_STATE = {
  cartItems: [],
};

const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.name === cartItemToAdd.name
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.name === cartItemToAdd.name
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.name === cartItemToRemove.name
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.name !== cartItemToRemove.name
    );
  }

  return cartItems.map((cartItem) =>
    cartItem.name === cartItemToRemove.name
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const addCart = (item) => ({
  type: "ADD_CART",
  payload: item,
});

export const removeCart = (item) => ({
  type: "REMOVE_CART",
  payload: item,
});

export const clearAll = (item) => ({
  type: "CLEAR_ALL",
  payload: item,
});

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case "REMOVE_CART":
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case "CLEAR_ALL":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
