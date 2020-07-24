import React from 'react';

import { Container, Content, Nav, ContentNav, RegisterTask, ListTask } from './styles';

function Home() {
  return (
    <Container>
      <Nav>
        <ContentNav>
          <h1>Olá, Gabriel!</h1>
          <a href="#">logout</a>
        </ContentNav>
      </Nav>
      <Content>
        <RegisterTask>
          <h2>Cadastre uma nova tarefa.</h2>
          <form>
            <input type="text" placeholder="Nome"/>
            <input type="text" placeholder="Data de entrega"/>
            <input type="text" placeholder="Data de conclusão"/>

            <button type="submit">Cadastrar</button>
          </form>
        </RegisterTask>

        <ListTask>
          <h2>Tarefas</h2>

          <ul class="thead">
            <li>Nome</li>
            <li>Entrega</li>
            <li>Conclusão</li>
            <li>Ações</li>
          </ul>
          <ul class="tbody">
            <li>Limpar Casa</li>
            <li>02/12/19</li>
            <li>02/12/20</li>
            <li>
              <span>o</span>
              <span>X</span>
            </li>
          </ul><ul class="tbody">
            <li>Limpar Casa</li>
            <li>02/12/19</li>
            <li>02/12/20</li>
            <li>
              <span>o</span>
              <span>X</span>
            </li>
          </ul><ul class="tbody">
            <li>Limpar Casa</li>
            <li>02/12/19</li>
            <li>02/12/20</li>
            <li>
              <span>o</span>
              <span>X</span>
            </li>
          </ul><ul class="tbody">
            <li>Limpar Casa</li>
            <li>02/12/19</li>
            <li>02/12/20</li>
            <li>
              <span>o</span>
              <span>X</span>
            </li>
          </ul>
        </ListTask>
      </Content>
    </Container>
  );
}

export default Home;