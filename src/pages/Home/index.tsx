import * as S from "./styles"
import spm from "../../assets/spider-principal 1.png"
import arina from "../../assets/aranha-imagem-animada-0192.gif"
export function Home() {
  return (

    <S.Inicial> 
       <S.Igm>
      <img src= {spm} alt="spider-man"/>
      </S.Igm>
     
       <S.Texs>
      <li>
            <a href="" id="li-cads">Cadastre-se</a>
            </li>
        </S.Texs>
    
    </S.Inicial>
   
  )
}