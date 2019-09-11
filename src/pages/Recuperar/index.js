import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function RecuperarSenha() {
  return (
    <Container>
      <h1>RECUPERAR SENHA</h1>

      <div>
        <form>
          <label>Email:</label>
          <input type="email" placeholder="email@email.com.br" />

          <button type="button">RECUPERAR</button>

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
