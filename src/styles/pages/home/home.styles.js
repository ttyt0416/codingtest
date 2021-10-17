import styled from "styled-components";
import { textColor, responsive } from "../../theme";

const getRandom = () => {
  let random = Math.random() < 0.5 ? Math.random() * -100 : Math.random() * 100;
  return random;
};

export const Homepage = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const HomepageWelcome = styled.div`
  color: ${textColor};
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media ${responsive.mobile} {
    top: 90%;
    padding: 12rem 0;
  }
`;

export const HomepageContent = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.5s;

  &:hover {
    transform: translate(${getRandom}px, ${getRandom}px);
  }
`;
