import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Login() {
  return (
    <Container>
      <h1>LOGIN</h1>
      <div>
        <form>
          <label>Email:</label>
          <input type="email" placeholder="email@email.com.br" />

          <label>Senha:</label>
          <input type="password" />

          <button type="button">ENTRAR</button>
          <nav>
            <Link to="/RecuperarSenha">
              <p>Recuperar Senha</p>
            </Link>
            <Link to="/Cadastrar">
              <p>Cadastre-se</p>
            </Link>
          </nav>
        </form>
      </div>
    </Container>
  );
}
