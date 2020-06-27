import React from "react";
import { ThemeProvider } from "styled-components";
import themeStyles from "./themeStyles";

const Theme = ({ children }) => {
  return <ThemeProvider theme={themeStyles}>{children}</ThemeProvider>;
};

export default Theme;
