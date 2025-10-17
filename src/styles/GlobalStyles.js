//= laz r
//= 08-16-2025 17:20
//= GlobalStyles.js

//= Dependencies =//
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    html {
        background-color: ${({ theme }) => theme.colors.dark1};
    }

    body {
        font-family: system-ui, sans-serif;
        color: ${({ theme }) => theme.colors.light1};
    }


    button:hover {
        border-color: ${({ theme }) => theme.colors.light3};
    }
`;
