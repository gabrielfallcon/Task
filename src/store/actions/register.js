import actionType from '../actionType';

export const addRegister = register => {
  return {
    type: actionType.ADD_REGISTER,
    register,
  }
}
