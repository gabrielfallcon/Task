
const INITIAL_STATE = []

const register = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_LOG':

      const emailUser = action.payload.email
      const senhaUser = action.payload.senha

      const dataUsers = JSON.parse(localStorage.getItem('persist:root'));
      const data = JSON.parse(dataUsers.register)

      const isValid = data.filter(item => item.email == emailUser && item.senha == senhaUser );

      const obj = isValid[0]

      if(obj !== undefined ) {
        const {email, id} = obj
        return state = [ email, id ]
      }else {
        console.log('nao passou :/')
      }
      return null
  
    default:
      return state;
  }
}

export default register