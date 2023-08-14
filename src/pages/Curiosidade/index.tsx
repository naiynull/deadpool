import * as S from "./styles"
import fundo02 from "../../assets/fundo2.png"
import detadpool from "../../assets/rr.png"
import mulherdead from "../../assets/image 6.png"
import carinha from "../../assets/image 5.png"
import mulherama from "../../assets/image 4.png"
import sapata from "../../assets/image 3.png"


export function Curiosidade () {
    return (
      <S.Cestilo>
     <div style={{ backgroundImage: `url(${fundo02})` }}>
     <section>
    <img  src={detadpool} alt="deadpool" />
    <img src={mulherdead} alt="mulher do deadpool" />
    <img src={carinha} alt="homen de aço" />
    <img src={mulherama} alt="mulher" />
    <img src={sapata} alt="mulher" />
    </section>
    </div>
    
      </S.Cestilo>
    )
  }