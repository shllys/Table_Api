import React from 'react'
import Button from 'react-bootstrap/Button';
// import Buttons from './Buttons';


// POST: crear un recurso nuevo. PUT: modificar un recurso existente. GET: consultar información de un recurso. DELETE: eliminar un recurso determinado.

function TableBodyMore(props) {
  const {
    id_usuario,
    dt_fecha_nacimiento,
    st_usuario,
    id_documento
  } = props.usuario;

  return (
    <tr>
      <td>{id_usuario}</td>
      <td>{st_usuario}</td>
      <td>{id_documento}</td>
      <td>{dt_fecha_nacimiento}</td>
      <td>
      <div className="d-grid gap-2">
      <Button variant='outline-danger'>
        Delete
      </Button>
      </div>
      </td>
    </tr>
  )
}

export default TableBodyMore