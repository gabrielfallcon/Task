const INITIAL_STATE = [
  {
    cpf: '',
    nome: '',
    email: '',
    dataNascimento: '',
    cep: '',
    endereco: '',
    numero: '',
    senha: '',
  }
]

const register = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_REGISTER':
      return [...state, action.register];
    default:
      return state;
  }
}

export default register