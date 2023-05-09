import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastros";
import Login from "../pages/Login";
// import Recados from "../pages/Recados";


const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} /> 
            <Route path="/cadastro" element={<Cadastro/>} />  
          {/*   // <Route path="/recados" element={<Recados/>} />   */}
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;