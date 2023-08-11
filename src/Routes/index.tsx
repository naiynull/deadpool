import { Routes, Route } from "react-router-dom"
import { PageHome, PageList, PageLayout } from "../pages"

export function RouteSoftware() {
  return (
    <Routes>
      <Route path="/" element={<pageCuriosidade />}>
        <Route path="" element={<PageHome />} />
        <Route path="Sinopse" element={<PageSinopse />} />
        <Route path="Geral" element={<PageGeral />} />
      </Route>
    </Routes>
  )
}
