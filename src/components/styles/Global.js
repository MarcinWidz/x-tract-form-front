import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    };

    body {
        font-family: "Poppins", sans-serif;
        background-color: ${({ theme }) => theme.colors.body}
    }
`;

export default GlobalStyles;
