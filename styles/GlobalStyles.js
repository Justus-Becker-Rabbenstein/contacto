import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        margin-bottom: 2rem;
        font-family: 'Roboto', sans-serif;
        background: rgb(207,245,231);
        background: linear-gradient(45deg, rgba(207,245,231,1) 0%, rgba(160,228,203,1) 34%, rgba(89,193,189,1) 66%, rgba(13,76,146,1) 100%);
        background-repeat: space repeat;
        min-height: 100vh;
    }
    h1 {
        color: #0D4C92;
    }
    button {
        width: 12rem;
        height: 2.5rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 1.5rem;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2.2px);
        -webkit-backdrop-filter: blur(2.2px);
        border: 1px solid rgba(255, 255, 255, 0.5);
        :active {
    background-color: #cff5e7;
    }
    &:hover {
    border: 3px solid #cff5e7;
    }
    }
    a {
        color: #0D4C92;
    }
    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
