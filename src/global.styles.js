import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    body {
        padding: 20px 40px;
        margin: auto;
        width: 100%;

        font-family: 'Open Sans Condensed';

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }
    
    a {
        text-decoration: none;
        color: black;
    }
    
    * {
        box-sizing: border-box;
    }
`