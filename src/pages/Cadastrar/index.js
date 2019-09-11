import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Cadastrar() {
  return (
    <Container>
      <h1>CADASTRE-SE</h1>

      <div>
        <form>
          <label>Nome:</label>
          <input type="text" placeholder="Nome Completo" />

          <label>Email:</label>
          <input type="email" placeholder="email@email.com.br" />

          <label>Senha:</label>
          <input type="password" />

          <button type="button">CADASTRAR-SE</button>
          <nav>
            <Link to="/">
              <p>Faça Login</p>
            </Link>
          </nav>
        </form>
      </div>
    </Container>
  );
}
