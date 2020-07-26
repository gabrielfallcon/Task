import React, {useState, useEffect} from 'react';

import { FiXCircle, FiEdit, FiEye, FiCircle } from 'react-icons/fi' 

const ListTask = (props) => {

  return(
    <>
      {props.data && 
        props.data.map(item => (
          item.idAuthor === props.idAuthor[1] ? (
            <ul key={item.id} className="tbody">
              <FiCircle className="concluir" color="#0FA958" size={15} />
  
              <li>{item.nome}</li>
              <li>{item.dataEntrega}</li>
              <li>{item.dataConclusao}</li>
              <li className="icons">
                <FiEye className="zoom" color="#18A0FB" size={20} />
                <FiEdit className="edit" color="#f8d930" size={20} />
                <FiXCircle className="cancel" color="#EF0303" size={20} />
              </li>
            </ul>
          ): (
            <h1></h1>
          )
        ))
      } 
    </>
  )
}

export default ListTask