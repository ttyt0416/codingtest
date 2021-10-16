import styled from "styled-components";
import { backgroundColor, textColor } from "../theme";

export const Cart = styled.div`
  width: 200px;
  height: 300px;
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: ${backgroundColor};
  border: 3px solid ${textColor};
  border-radius: 4px;
  z-index: 20;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    background-color: ${backgroundColor};
    width: 5px;
    height: 100%;

    &-thumb {
      background: ${textColor};
    }
  }
`;

export const CartIsEmpty = styled.div`
  width: 100%;
  text-align: center;
  color: ${textColor};
  margin-top: 20%;
  font-size: 15px;
`;

export const CartItem = styled.div`
  margin: 5% 2% 1% 2%;
  display: flex;
  width: 100%;
`;

export const CartImage = styled.img`
  width: 30%;
  height: 80px;
  background-color: ${textColor};
`;

export const CartItemInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const CartItemName = styled.div`
  color: ${textColor};
  font-size: 13px;
`;

export const CartItemQuantity = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 3%;
  color: ${textColor};
  font-size: 1.2rem;
`;

export const ModifyCartItemQuantity = styled.span`
  color: ${textColor};
  font-weight: 900;
  cursor: pointer;
  margin: 2%;
  font-size: 1.2rem;
`;

export const ResetCartItemsButton = styled.button`
  color: ${textColor};
  background-color: ${backgroundColor};
  border: 3px solid ${textColor};
  border-radius: 4px;
  width: 80%;
  margin: 3% 10%;
`;
