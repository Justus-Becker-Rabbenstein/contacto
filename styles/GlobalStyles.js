import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background-image: url('pawel-czerwinski-HbcfaO4m03s-unsplash.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    * {
        box-sizing: border-box;
    }
    button {
        background-color: #001533;
        color: #D9D9D9;
        border-radius: 9px;
    }
    a {
        color: #D9D9D9;
    }
`;

export default GlobalStyles;
