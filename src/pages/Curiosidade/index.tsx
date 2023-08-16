import * as S from "./styles"
import fundo02 from "../../assets/itp.jpg"
import filme01 from "../../assets/filme01.mp4"
import filme02 from "../../assets/filme02.mp4"
import filme03 from "../../assets/filme03.mp4"

export function Curiosidade () {
    return (
      <S.Cestilo>
     <video id="videoBanner" className="videoBanner" loop autoPlay muted >
       <source src={filme01} type='video/mp4'></source>
          </video>
          <video id="videoBanner" className="videoBanner" loop autoPlay muted >
       <source src={filme02} type='video/mp4'></source>
     
     </video>
     <video id="videoBanner" className="videoBanner" loop autoPlay muted >
       <source src={filme03} type='video/mp4'></source>
     
     </video>
      </S.Cestilo>
    )
  }