import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { responsive } from "../../theme";

export const ImageControl = styled.div`
  position: absolute;
  z-index: 10;
  width: 90%;
  left: 5%;
  top: 23%;
  justify-content: space-between;
  display: flex;
  opacity: 0;

  @media ${responsive.tablet} {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 40rem;

  &:hover ${ImageControl} {
    opacity: 0.5;
  }
`;

export const Image = styled.img`
  position: absolute;
  z-index: 5;
  left: 5%;
  top: 8%;
  width: 90%;
  height: 40rem;

  transition: all 1s;
`;

export const ImagePrev = styled(ChevronLeft)`
  width: 5rem !important;
  height: 5rem !important;
  background-color: white;
  border-radius: 5rem;
  cursor: pointer;

  & > path {
    color: black;
  }
`;

export const ImageNext = styled(ChevronRight)`
  width: 5rem !important;
  height: 5rem !important;
  background-color: white;
  border-radius: 5rem;
  cursor: pointer;
  color: black !important;

  & > path {
    color: black;
  }
`;
