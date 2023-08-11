import { Routes, Route } from "react-router-dom"
import { PageHome, PageCuriosidade, PageSinopse, PageGeral, PageLayout } from "../pages"

export function RouteSoftware() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="curiosidade" element={< PageCuriosidade />} />
        <Route path="home" element={<PageHome />} />
        <Route path="Sinopse" element={<PageSinopse />} />
        <Route path="Geral" element={<PageGeral />} />
      </Route>
    </Routes>
  )
}
