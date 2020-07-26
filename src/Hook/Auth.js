export const isAuthenticated = () => {

  const data = JSON.parse(localStorage.getItem('persist:root'));
  const isValid = JSON.parse(data.auth)

  if(isValid === []) {
    console.log('erro')
    return false;
  } else {
    console.log(isValid)
    return true;
  }

}