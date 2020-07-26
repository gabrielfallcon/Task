import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { addTask } from '../../store/actions/task';
import { removeSession } from '../../store/actions/auth';

import ListTasks from '../../components/ListTask';

import { FiPower } from 'react-icons/fi';
import { Container, Content, Nav, ContentNav, RegisterTask, ListTask } from './styles';

const Home = () => {
  const INITIAL_STATE = {
    nome: '',
    dataEntrega: '',
    dataConclusao: ''
  }

  const history = useHistory();
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [idUser, setIdUser] = useState('');
  const [form, setForm] = useState(INITIAL_STATE);
  
  const getTask = () => {
    const listTasks = JSON.parse(localStorage.getItem('persist:root'));
    const dataTask = JSON.parse(listTasks.task);

    const idAuthor = JSON.parse(listTasks.auth);

    
    setIdUser(idAuthor);
    setData([...data, ...dataTask]);
  };

  const sessionFinish = () => {
    dispatch(removeSession());

    history.push('/');
  }

  useEffect(() => {
    getTask();
  }, [])
  
  


  const formChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value});
  } 

  const formSubmit = e => {
    e.preventDefault();

    dispatch(addTask(form));

    setForm(INITIAL_STATE);
    
    getTask();
  }

  return (
    <Container>
      <Nav>
        <ContentNav>
          <h1>Olá, {idUser[2]}!</h1>
          <span onClick={sessionFinish}><FiPower color="#E8E9ED" size={22}/></span>
        </ContentNav>
      </Nav>
      <Content>
        <RegisterTask>
          <h2>Cadastre uma nova tarefa.</h2>
          <form onSubmit={formSubmit}>
            <input 
              type="text" 
              name="nome"
              placeholder="Nome"
              value={form.nome}
              onChange={formChange}
            />

            <input 
              type="date" 
              name="dataEntrega"
              placeholder="Data de entrega"
              value={form.dataEntrega}
              onChange={formChange}
            />

            <input 
              type="date" 
              name="dataConclusao"
              placeholder="Data de conclusão"
              value={form.dataConclusao}
              onChange={formChange}
            />

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
          
          <ListTasks data={data} idAuthor={idUser} />

        </ListTask>
      </Content>
    </Container>
  );
}

export default Home;