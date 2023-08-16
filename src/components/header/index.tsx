import * as S from "./styles"
import logo from "../../assets/logo.png"
import arina from "../../assets/yt.png"
import varina from "../../assets/ga.gif"
export function Header() {
  return (
   
    <S.Header>
    <picture>
       <img src={logo} alt="Logo" />
    </picture>
   
      <S.NavBar>
        <ul>
          <li>
            <a href="/home ">Home</a>
          </li>
          <li>
            <a href="/personagem">Personagem 
            </a>
          </li>
          <li>
          
            <a href="/Sinopse">Sinopse</a>
          </li>
          <li>
            <a href="/Geral">Geral</a>
          </li>
        </ul>
        <img id="ari" src={arina} alt="aranha" />
        
      </S.NavBar>
    </S.Header>

  )
}