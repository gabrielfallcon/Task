export const isAuthenticated = () => {
  const INITIAL_STATE = []

  const data = JSON.parse(localStorage.getItem('persist:root'));
  const isValidAuth = JSON.parse(data.auth[1])

  

  if(isValidAuth != undefined) {
    return false
  }else {
    return true
  }

}