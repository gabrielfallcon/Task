import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addRegister } from '../../store/actions/register'

import { Container, Content } from './styles';

const Register = () => {

  const INITIAL_STATE = {
    cpf: '',
    nome: '',
    email: '',
    dataNascimento: '',
    cep: '',
    endereco: '',
    numero: '',
    senha: ''
  }

  const [form, setForm] = useState(INITIAL_STATE)

  const dispatch = useDispatch();


  const formChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value});
  }

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addRegister(form));

    setForm(INITIAL_STATE)
  }
  
  

  return(
    <Container>
      <Content>
        <h2>
          Register
        </h2>
        <form onSubmit={onSubmit}>
          <input 
            onChange={formChange}
            type="text" 
            name="cpf"
            placeholder="CPF"
            value={form.cpf}
          />

          <input 
            type="text" 
            name="nome"
            placeholder="Nome"
            value={form.nome}
            onChange={formChange}
          />

          <input 
            type="text" 
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={formChange}
          />

          <input 
            type="text" 
            name="dataNascimento"
            placeholder="Data de Nascimento"
            value={form.dataNascimento}
            onChange={formChange}
          />

          <input 
            type="text" 
            name="cep"
            placeholder="CEP"
            value={form.cep}
            onChange={formChange}
          />
          <input 
            type="text" 
            name="endereco"
            placeholder="Endereço"
            value={form.endereco}
            onChange={formChange}
          />
          
          <input 
            type="text" 
            name="numero"
            placeholder="Número"
            value={form.numero}
            onChange={formChange}
          />

          <input 
            type="password" 
            name="senha"
            placeholder="Senha"
            value={form.senha}
            onChange={formChange}
          />

          <button type="submit"> Register </button>
        </form>
      </Content>
    </Container>
  );
}

export default Register;