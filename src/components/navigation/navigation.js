import React, { useState } from "react";
import {
  NavBar,
  NavBarLeft,
  NavBarLink,
  NavBarRight,
  NavBarCart,
  NavBarCartLength,
  NavBarToggleDarkButton,
} from "../../styles/components/navigation/navigation.styles";

import { useSelector, useDispatch } from "react-redux";
import { toggleDarkmode } from "../../Modules/darkmode/darkmode.reducer";
import {
  ShoppingCart,
  ShoppingCartOutlined,
  NightsStay,
  WbSunnyOutlined,
} from "@material-ui/icons";

import CartDropdown from "../cart-dropdown/cartDropdown";

const Navigation = () => {
  const [cart, setCart] = useState(false);
  const cartLength = useSelector((state) => state.cart.cartItems);
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  const dispatch = useDispatch();

  const toggleDark = () => {
    dispatch(toggleDarkmode());
  };

  const toggleCart = () => {
    setCart(!cart);
  };

  return (
    <>
      <NavBar>
        <NavBarLeft>
          <NavBarLink to="/home">Home</NavBarLink>
          <NavBarLink to="/beerlist">Beerlist</NavBarLink>
        </NavBarLeft>
        <NavBarRight>
          <NavBarCart onClick={toggleCart}>
            {cartLength.length === 0 ? (
              <ShoppingCartOutlined />
            ) : (
              <ShoppingCart />
            )}
            <NavBarCartLength>{cartLength.length}</NavBarCartLength>
          </NavBarCart>
          <NavBarToggleDarkButton onClick={toggleDark}>
            {darkmode === "dark" ? <WbSunnyOutlined /> : <NightsStay />}
          </NavBarToggleDarkButton>
        </NavBarRight>
      </NavBar>
      {cart ? <CartDropdown /> : null}
    </>
  );
};

export default Navigation;
