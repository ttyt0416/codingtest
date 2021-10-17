import React from "react";
import {
  Cart,
  CartIsEmpty,
  CartItem,
  CartImage,
  CartItemInfo,
  CartItemName,
  CartItemQuantity,
  ModifyCartItemQuantity,
  ResetCartItemsButton,
} from "../../styles/components/cart-dropdown/cart-dropdown.styles";

import { useSelector, useDispatch } from "react-redux";
import { addCart, removeCart, clearAll } from "../../Modules/cart/cart.reducer";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  let dispatch = useDispatch();

  const increaseItem = (event) => {
    const item = { name: event.target.parentNode.previousSibling.innerText };
    dispatch(addCart(item));
  };

  const decreaseItem = (event) => {
    const item = { name: event.target.parentNode.previousSibling.innerText };
    dispatch(removeCart(item));
  };

  const clearCart = () => {
    dispatch(clearAll());
  };

  return (
    <Cart>
      {cartItems.length !== 0 ? (
        cartItems.map((cartItem, i) => (
          <CartItem>
            <CartImage src={cartItem.image_url} alt="" />
            <CartItemInfo>
              <CartItemName>{cartItem.name}</CartItemName>
              <CartItemQuantity>
                <ModifyCartItemQuantity onClick={decreaseItem}>
                  -
                </ModifyCartItemQuantity>
                {cartItem.quantity}
                <ModifyCartItemQuantity onClick={increaseItem}>
                  +
                </ModifyCartItemQuantity>
              </CartItemQuantity>
            </CartItemInfo>
          </CartItem>
        ))
      ) : (
        <CartIsEmpty>Empty</CartIsEmpty>
      )}
      <ResetCartItemsButton onClick={clearCart}>Clear</ResetCartItemsButton>
    </Cart>
  );
};

export default CartDropdown;
