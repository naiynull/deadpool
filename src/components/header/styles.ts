import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  /* background-color: rgba(17, 17, 17, 0.00); */
  background-color: #000000;
  border-bottom: none;
  display: flex;
  height: 3rem;
  width: 100%;
  picture {
    margin-left: 0.5rem;
    padding: 0.5rem;
  }
  nav{
    
    width: 90%;
    padding-left:2rem;
  }
  img{
    width:60px;
    
  }
  nav ul{
    padding-top: 1rem;
    width: 100%;
    list-style-type:none;
    display:flex;
    align-items:center;
    font-size:26px;
    justify-content:space-evenly;
  }
  nav ul a{
    text-decoration:none;
    color: ${colors.textoheader}
  }
  nav ul li:hover{
  text-decoration: underline;
  color:${colors.detalhedelinha}
}
`

export const NavBar = styled.nav`
  /* Navegação */

background-color: none;
`
