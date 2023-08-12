import * as S from "./styles"
import central from "../../assets/ee.png"


export function Home() {
  return (

    <S.Inicial> 
      <S.Ima>
    <img id="ug" src={central} alt="deadpool"/>
    </S.Ima>
   <S.Texto>
      <h1><p>Anti Hero</p>
       <p id="dead">Deadpool</p>
      <p>Marvel</p></h1>
    </S.Texto>
   
    </S.Inicial>
   
  )
}