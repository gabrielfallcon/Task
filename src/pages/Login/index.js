import React from 'react';
import { Link } from 'react-router-dom'

import { Container, Content } from './styles';

function Login() {
  return(
    <Container>
      <Content>
        <h2>
          Login
        </h2>
        <form>
          <input type="text" placeholder="CPF"/>
          <input type="password" placeholder="Senha"/>
          <button>Entrar</button>

          <Link to="/">não tenho cadastro</Link>
        </form>
      </Content>
    </Container>
  );
}

export default Login;