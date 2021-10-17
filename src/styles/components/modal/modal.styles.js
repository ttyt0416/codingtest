import styled from "styled-components";
import { backgroundColor, textColor, responsive } from "../../theme";

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 80%;
  background-color: ${backgroundColor};
  z-index: 20;
  border: 3px solid ${textColor};
  color: ${textColor};
  border-radius: 10%;
  overflow-y: auto;
  overflow-x: hidden;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${responsive.tablet} {
    width: 90%;
  }
`;

export const ModalImage = styled.img`
  width: 50%;
  height: 30%;
  margin: 5% 25%;
  background-color: ${textColor};
`;

export const ModalContentContainer = styled.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  gap: 15%;
`;

export const ModalContents = styled.div`
  width: 40%;
  margin-bottom: 3%;
`;

export const ModalSpan = styled.span`
  font-size: 15px;
  font-weight: 700;
`;

export const ModalStronger = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-top: 2%;
`;

export const ModalLighter = styled.div`
  font-size: 13px;
  font-weight: 300;
  margin-top: 2%;
`;

export const ModalDashedContainer = styled.div`
  border-bottom: 1px dashed ${textColor};
  text-align: center;
  margin: 1% 0;
  padding-top: 1%;
  padding-bottom: 2%;
`;

export const ModalClose = styled.button`
  position: absolute;
  font-weight: 900;
  font-size: 30px;
  background-color: ${backgroundColor};
  color: ${textColor};
  border: none;
  top: 5%;
  left: 3%;
  cursor: pointer;
`;
