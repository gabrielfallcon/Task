export const authLogin = user => {
  return {
    type: 'ADD_LOG',
    payload: user,
  } 
}

export const removeSession = () => {
  return {
    type: 'REMOVE_SESSION',
  }
}
