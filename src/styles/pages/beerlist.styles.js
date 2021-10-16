import styled from "styled-components";
import { backgroundColor, textColor } from "../theme";

export const BeerListResetButton = styled.div`
  color: ${textColor};
  backgruond-color: ${backgroundColor};
  font-size: 1.5rem;
  line-height: 1.5;
  border: 1px solid ${textColor};
  border-radius: 10px;
  width: 5%;
  text-align: center;
  position: absolute;
  top: 11%;
  left: 10%;
  cursor: pointer;
  padding: 0.5rem 1rem;
`;

export const ToggleFilterButton = styled.div`
  color: ${textColor};
  background-color: ${backgroundColor};
  font-size: 1.5rem;
  line-height: 1.5;
  border: 1px solid ${textColor};
  border-radius: 10px;
  width: 7%;
  text-align: center;
  position: absolute;
  top: 11%;
  left: 20%;
  cursor: pointer;
  padding: 0.5rem 1rem;
  white-space: nowrap;
`;

export const FilterContainer = styled.div`
  position: absolute;
  text-align: center;
  z-index: 10;
  width: 10rem;
  height: 20rem;
  top: 16%;
  left: 21%;
  background-color: ${backgroundColor};
  border: 3px solid ${textColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const FilterCheckbox = styled.input`
  color: black;
`;

export const FilterLabel = styled.label`
  color: ${textColor};
  font-size: 1.2rem;
`;

export const FilterButton = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  background-color: ${backgroundColor};
  color: ${textColor};
  border: 1px solid ${textColor};
  padding: 0.5rem 0.7rem;
  margin-bottom: 0.5rem;
`;
