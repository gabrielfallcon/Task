import { uuid } from 'uuidv4'

const INITIAL_STATE = [
  
]

const register = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_REGISTER':
      const { register } = action

      return state = [...state, {...register, id: uuid()}];
    default:
      return state;
  }
}

export default register