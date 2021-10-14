import React, { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

//custom components by styled-component
const NavBar = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 900;
  padding: 1% 0;
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
`;

const Navigation = () => {
  const [cart, setCart] = useState(false);

  const toggleCart = () => {
    setCart(!cart);
  };

  return (
    <NavBar>
      <NavBarLeft>
        <NavBarLink to="/home">Home</NavBarLink>
        <NavBarLink to="/beerlist">Beer</NavBarLink>
      </NavBarLeft>
      <NavBarRight onClick={toggleCart}>Cart</NavBarRight>
    </NavBar>
  );
};

export default Navigation;
