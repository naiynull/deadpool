import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Inicial = styled.section`
li{
    
   
}
`
 export const Igm =styled.section`
     display: flex;
     justify-content:flex-end;
      width: 100%;
    img{
        width: 76rem;
    }

 `
  export const Texs = styled.section`
 
#li-cads {

display: flex;
border: none;
padding: 20px;
font-weight: bold;
font-size: 28px;
text-transform: uppercase;
color: ${colors.texto};
text-decoration: none;
outline: none;
border-radius: 17px;
}

#li-cads:hover {
background-color: ${colors.detalhedelinha};
width: 18%;
height: 80px;
}

#li-cads {
width: 17%;
height: 20px;
background: linear-gradient(180deg, #C60303 0%, rgba(115, 5, 5, 0.00) 100%);
transition: width 2s, height 3s;
}

`
 
 
  
