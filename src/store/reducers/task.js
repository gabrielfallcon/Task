import actionTypes from '../actionType';
import { uuid } from 'uuidv4'

const INTIAL_STATE = [

]

const task = (state = INTIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.ADD_TASK:
      const { payload } = action

      const dataSession = JSON.parse(localStorage.getItem('persist:root'))
      const dataAuth = JSON.parse(dataSession.auth);
      
      const idAuthor = dataAuth[1]
      console.log(idAuthor)

      const dataDefault = {
        idAuthor,
        id: uuid(),
        concluded: false
      }

      const data = {...payload, ...dataDefault}

      if(data == null) {
        return console.log('erro')
      }
      return state = [...state, data]
    
    default:
      return state
  }
}

export default task