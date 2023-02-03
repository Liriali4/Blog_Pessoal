import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/rodape";
import NaoEncontrada from "paginas/NaoEncontrada";
import Post from "paginas/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/menu";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
         
        </Route>

{/*

Na rota "/", a estrutura a ser renderizada é:
    <PaginaPadrao>
      <Inicio/>
    </PaginaPadrao>

Na rota "/Sobremim", a estrutura a ser renderizada é:
    <PaginaPadrao>
      <SobreMim/>
    </PaginaPadrao>
 */}
         <Route path="posts/:id/*" element={<Post />} />
         <Route path="*" element={<NaoEncontrada/>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
