import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    *, *:before, *:after, html {
        font-family: 'Noto Sans KR', sans-serif;
        box-sizing: border-box;
    }    
`;
