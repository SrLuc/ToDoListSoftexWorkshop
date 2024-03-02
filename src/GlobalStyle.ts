import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    list-style: none;
}
    :root{
        --black-color: #0D0D0D;
        --gray-color: #262626;
        --red-color: #F20505;
        --yellow-color: #F2D230
        --green-color: #19A603
        --blue-color: #3574F2
    }

    html{
        background-color:  #141313 ;
    }

`;

export default GlobalStyle;
