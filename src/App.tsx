import { GlobalStyle } from "./styles/GlobalStyle";
import { RouteSoftware } from "./Routes"
import { BrowserRouter } from "react-router-dom"

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RouteSoftware />
    </BrowserRouter>
  )
}
