import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`  
  ${normalize}
 
  body{   
    background-color: ${(props) => props.theme.colors.midnightGreen};
    font-size: 18px;
    line-height: 28px;
    font-family: 'Livvic', sans-serif;
    font-weight:  ${(props) => props.theme.font.semiBold};
    color: ${(props) => props.theme.colors.white};
    
  }

  h1 {
    font-weight: ${(props) => props.theme.font.bold};
    font-size: 64px;
    line-height: 56px;

    &.large {    
      font-size: 100px;
      line-height: 100px;
    }
  }

  h2 {
    font-weight: ${(props) => props.theme.font.bold};
    font-size: 48px;
    line-height: 48px;
    margin: 0px;

    &.small {
      font-size: 32px;
      line-height: 48px;
    }
  }

  h3 {
    font-weight: ${(props) => props.theme.font.bold};
    font-size: 18px;
    line-height: 28px;
  }

  ul {
    margin: 0;
    list-style: none;
    padding-left: 0;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    transition: all 200ms;
    &:hover {
      color: ${({ theme }) => theme.colors.lightCoral};
    }
    &.active {
    color: ${({ theme }) => theme.colors.lightCoral};
  }
  
  }

  .text---highlight {
    color: ${(props) => props.theme.colors.lightCoral};
  }

  .text---small {
    font-size: 15px;   
    line-height: 25px;
  }


`;

export default GlobalStyles;
