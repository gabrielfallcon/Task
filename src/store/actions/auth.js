import actionType from '../actionType';

export const authLogin = user => {
  return {
    type: actionType.ADD_LOG,
    payload: user,
  } 
}

export const removeSession = () => {
  return {
    type: actionType.REMOVE_SESSION,
  }
}
