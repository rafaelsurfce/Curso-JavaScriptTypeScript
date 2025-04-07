import styled, { createGlobalStyle } from "styled-components";
import { primaryColor, primaryDarkColor, errorColor, sucessColor } from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
    background-color: ${primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: ${primaryColor};
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${sucessColor};
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${errorColor};
  }
`;

export const Container = styled.section `
  max-width: 480px;
  background: #fff;
  margin: 30px auto;

`;
