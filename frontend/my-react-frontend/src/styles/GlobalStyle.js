import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root{
        --primary-color: #05052b;
        --primary-color2:  rgba(34, 34, 96, .6);
        --primary-color3:  rgba(34, 34, 96, .4);
        --color-green: #42AD00;
        --color-grey: ##05052b;
        --color-accent:#FFA500;
        --color-delete: #FF0000;
    }

    body{
        font-family: 'Roboto', sans-serif;
        font-size: clamp(1rem, 1.3vw, 1.1rem);
        overflow: hidden;
        color: rgba(34, 34, 96, 1);
    }
`;