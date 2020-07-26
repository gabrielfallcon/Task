import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { cpf } from 'cpf-cnpj-validator';

import { useDispatch, useSelector } from 'react-redux';
import { addRegister } from '../../store/actions/register';

import Error from '../../components/Error';

import { Container, Content } from './styles';

const Register = () => {

  const history = useHistory();

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

  const [form, setForm] = useState(INITIAL_STATE);

  const dispatch = useDispatch();

  const formChange = (e) => {
    if(e.target.name == 'cpf') return setForm({ cpf: cpf.format(e.target.value) })
    
    setForm({ ...form, [e.target.name]: e.target.value});
  }

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addRegister(form));

    setForm(INITIAL_STATE);

    alert('usuário cadastrado com sucesso!')

    history.push('/');
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

          { !cpf.isValid(form.cpf) && form.cpf >= 11 ? <Error error="CPF inválido" /> : '' }

          <input 
            type="text" 
            name="nome"
            placeholder="Nome"
            value={form.nome}
            onChange={formChange}
            required
          />

          <input 
            type="text" 
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={formChange}
            required
          />

          <input 
            type="date" 
            name="dataNascimento"
            placeholder="Data de Nascimento"
            value={form.dataNascimento}
            onChange={formChange}
            required
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
            required
          />

          <button type="submit"> Register </button>
        </form>
      </Content>
    </Container>
  );
}

export default Register;