import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { addCart, removeCart, clearAll } from "../../Modules/cart/cart.reducer";

const Cart = styled.div`
  width: 200px;
  height: 300px;
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: white;
  border: 3px solid black;
  border-radius: 4px;
  z-index: 20;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    background-color: white;
    width: 5px;
    height: 100%;

    &-thumb {
      background: black;
    }
  }
`;

const CartIsEmpty = styled.div`
  width: 100%;
  text-align: center;
  color: black;
  margin-top: 20%;
  font-size: 15px;
`;

const CartItem = styled.div`
  margin: 5% 2% 1% 2%;
  display: flex;
  width: 100%;
`;

const CartImage = styled.img`
  width: 30%;
  height: 80px;
`;

const CartItemInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const CartItemName = styled.div`
  color: black;
  font-size: 13px;
`;

const CartItemQuantity = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 3%;
`;

const ModifyCartItemQuantity = styled.span`
  color: black;
  font-weight: 900;
  cursor: pointer;
  margin: 2%;
`;

const ResetCartItemsButton = styled.button`
  color: black;
  background-color: white;
  border: 3px solid black;
  border-radius: 4px;
  width: 80%;
  margin: 3% 10%;
`;

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
