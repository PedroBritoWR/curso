import { Navigate, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Dashboard, Login, } from "../pages";



export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/PaginaInicial" element={<Dashboard />} />
                <Route path="/entrar" element={<Login />} />
                <Route path='*' element={<Navigate to='/PaginaInicial' />} />
            </Routes>
        </BrowserRouter>
    );

} 