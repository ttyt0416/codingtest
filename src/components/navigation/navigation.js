import React, { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart } from "@material-ui/icons";
import { ShoppingCartOutlined } from "@material-ui/icons";

import CartDropdown from "../cart-dropdown/cartDropdown";

//custom components by styled-component
const NavBar = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 900;
  padding: 1% 0;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.1);
`;

const NavBarLeft = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-around;
`;

const NavBarLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const NavBarRight = styled.div`
  width: 10%;
  text-align: center;
`;

const NavBarCartLength = styled.span`
  color: black;
  font-size: 12px;
  font-weight: 900;
  margin-left: 1%;
`;

const Navigation = () => {
  const [cart, setCart] = useState(false);
  const cartLength = useSelector((state) => state.cart.cartItems);

  const toggleCart = () => {
    setCart(!cart);
  };

  return (
    <>
      <NavBar>
        <NavBarLeft>
          <NavBarLink to="/home">Home</NavBarLink>
          <NavBarLink to="/beerlist">Beer</NavBarLink>
        </NavBarLeft>
        <NavBarRight onClick={toggleCart}>
          {cartLength.length === 0 ? (
            <ShoppingCartOutlined />
          ) : (
            <ShoppingCart />
          )}
          <NavBarCartLength>{cartLength.length}</NavBarCartLength>
        </NavBarRight>
      </NavBar>
      {cart ? <CartDropdown /> : null}
    </>
  );
};

export default Navigation;
