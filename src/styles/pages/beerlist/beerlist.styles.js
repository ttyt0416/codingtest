import styled from "styled-components";
import { backgroundColor, textColor, responsive } from "../../theme";

export const BeerListButtonContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  top: 11%;
  left: 8%;
  z-index: 20;

  @media ${responsive.tablet} {
    top: 6.5%;
    left: 15%;
  }

  @media ${responsive.mobile} {
    top: 13%;
    left: 3%;
  }
`;

export const BeerListResetButton = styled.div`
  color: ${textColor};
  backgruond-color: ${backgroundColor};
  font-size: 1.5rem;
  line-height: 1.5;
  border: 1px solid ${textColor};
  border-radius: 10px;
  width: 5%;
  text-align: center;
  cursor: pointer;
  padding: 0.5rem 2rem;
  white-space: nowrap;
  width: 30%;
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
  cursor: pointer;
  padding: 0.5rem 2rem;
  white-space: nowrap;
  width: 30%;
  display: flex;
  flex-direction: column;
`;

export const FilterContainer = styled.div`
  position: absolute;
  text-align: center;
  z-index: 10;
  width: 10rem;
  height: 20rem;
  top: 16%;
  left: 16%;
  background-color: ${backgroundColor};
  border: 2px solid ${textColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  @media ${responsive.tablet} {
    top: 11%;
    left: 33%;
  }

  @media ${responsive.mobile} {
    top: 19%;
    left: 38%;
  }
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
