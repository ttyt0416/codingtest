import styled from "styled-components";
import { textColor, responsive } from "../../theme";
import { Link } from "react-router-dom";

export const NavBar = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 900;
  padding: 1% 0;
  color: ${textColor};
  box-shadow: 0.5px 0.5px 5px ${textColor};

  @media ${responsive.mobile} {
    justify-content: space-around;
  }
`;

export const NavBarLeft = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-around;

  @media ${responsive.mobile} {
    gap: 2rem;
  }
`;

export const NavBarLink = styled(Link)`
  color: ${textColor};
  text-decoration: none;
`;

export const NavBarRight = styled.div`
  width: 10%;
  text-align: center;
  display: flex;
  margin-right: 5%;

  @media ${responsive.mobile} {
    gap: 2rem;
  }
`;

export const NavBarCart = styled.div`
  width: 100%;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
`;

export const NavBarCartLength = styled.span`
  font-size: 1.2rem;
  font-weight: 900;
  margin-left: 1%;
`;

export const NavBarToggleDarkButton = styled.div`
  width: 100%;
  text-align: center;
  cursor: pointer;
`;
