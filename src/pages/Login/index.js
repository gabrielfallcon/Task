import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiUser, FiLock } from 'react-icons/fi'

import { useDispatch } from 'react-redux';
import { authLogin } from '../../store/actions/auth';

import { Container, Content } from './styles';

function Login() {

  const history = useHistory();

  const [form, setForm] = useState({ email: '', senha: '' })

  const dispatch = useDispatch();

  const changeForm = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value});
  }

  const submitForm = (e) => {
    e.preventDefault();

    dispatch(authLogin(form));

    setForm({email: '', senha: '' });

    history.push('/home')
  }

  return(
    <Container>
      <Content>
        <h2>
          Login
        </h2>
        <form onSubmit={submitForm}>
          <div className="input">
            <FiUser size={20} color="#0FA958" style={{marginLeft: 10}}/>
            <input 
              type="text" 
              name="email" 
              placeholder="E-Mail"
              onChange={changeForm}
              value={form.email}
            />
          </div>

          <div className="input">
            <FiLock size={20} color="#0FA958" style={{marginLeft: 10}}/>
            <input 
              type="password" 
              name="senha" 
              placeholder="Senha"
              onChange={changeForm}
              value={form.senha}
            />
          </div>
          
          <button type="submit">Entrar</button>

          <Link to="/register">não tenho cadastro</Link>
        </form>
      </Content>
    </Container>
  );
}

export default Login;