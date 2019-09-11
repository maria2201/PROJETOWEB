import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Cadastrar from "./pages/Cadastrar";
import RecuperarSenha from "./pages/Recuperar";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/Cadastrar" component={Cadastrar} />
      <Route path="/RecuperarSenha" component={RecuperarSenha} />
    </BrowserRouter>
  );
}
