import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Inicial = styled.section`
padding-top: 0;
`
export const Ima = styled.section`
    
    display: flex;
    width: 100%;
    margin-left: 46rem;
    img{
    width: 86rem;
    }
 
`

export const Texto = styled.section`
 width:45%;
    h1{
      padding-left: 4rem;
      text-align: start;
       font-size: 65px;
       color: ${colors.preto};
       font-family:'Franklin Gothic Medium';
    }
    #dead{
        font-size: 150px;
        color: ${colors.textdead};
    }
    /* picture{
        img{
            width: 70rem;
        }
    } */
    /* #lc{
    padding-left: 1rem;
    margin-top:2px;
    width: 1000px;
    } */
 
 
  
`