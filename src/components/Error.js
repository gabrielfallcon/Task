import React from 'react';

const Error = props => {
  return(
    <p style={{color: 'red', marginBottom: 3, marginTop: 2, fontSize: 12}}>
      { props.error }
    </p>
  )
}

export default Error