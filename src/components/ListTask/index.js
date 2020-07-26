import React, {useState, useEffect} from 'react';

import { FiXCircle, FiEdit, FiEye, FiCircle } from 'react-icons/fi' 

const ListTask = (props) => {

  return(
    <>
      {props.data.map(item => (
        <ul class="tbody">
          <FiCircle class="concluir" color="#0FA958" size={15} />

          <li>{item.nome}</li>
          <li>{item.dataEntrega}</li>
          <li>{item.dataConclusao}</li>
          <li class="icons">
            <FiEye class="zoom" color="#18A0FB" size={20} />
            <FiEdit class="edit" color="#f8d930" size={20} />
            <FiXCircle class="cancel" color="#EF0303" size={20} />
          </li>
        </ul>
      ))}
    </>
  )
}

export default ListTask