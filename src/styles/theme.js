import { createGlobalStyle } from "styled-components";
import theme from "styled-theming";

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

export const responsive = {
  mobile: "(max-width: 757px)",
  tablet: "(max-width: 1023px)",
};

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
  width: 100%;
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: ${backgroundColor};
}

//styling material table
.MuiPaper-root {
  background-color: ${backgroundColor} !important;
  color: ${textColor} !important;
}

.MTableHeader-header-13 {
  background-color: ${backgroundColor} !important;
  color: ${textColor} !important;
}

.MuiToolbar-root {
  color: ${textColor};
  font-size: 1.2rem !important;
}

.MTablePaginationInner-root-14 {
  color: ${textColor} !important;
}

.MuiTypography-root {
  font-size: 1.2rem !important;
}

.MuiTypography-h6 {
  font-size: 2rem !important;
}

.MuiInput-underline {
  
  @media ${responsive.mobile} {
    font-size: 1rem !important;
  }

  &:before {
    border-bottom: 1px solid ${textColor} !important;
  }
  &:after {
    border-bottom: 2px solid ${textColor} !important;
  }
}

th {
  background-color: ${backgroundColor} !important;
  color: ${textColor} !important;
}

table {
  background-color: ${backgroundColor};
  color: ${textColor};

  @media ${responsive.mobile} {
    margin-top: 4rem;
  }
}

span {
  color: ${textColor} !important;
}

path {
  color: ${textColor};
  padding-left: 10px;
}


`;
