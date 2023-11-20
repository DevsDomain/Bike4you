import { Routes, Route } from "react-router-dom";
import Usuario from "../pages/Usuario";
import Home from "../pages/Home";
import BuscarBikes from "../pages/Buscar Bikes/BuscarBikes";
import NotFound from "../pages/404";
import Cadastro from "../components/Cadastro";
import EditBikes from "../pages/Editar/Editbike";



export function AppRoutes() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bikes" element={<BuscarBikes />} />
        <Route path="/editar/:id" element={<EditBikes />} />
        <Route path="/gerenciamento" element={<Usuario />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<NotFound/>}/>

        </Routes>
    )
}

