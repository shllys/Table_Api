import React from 'react'
import Button from 'react-bootstrap/Button';
import '../App.scss';

// POST: crear un recurso nuevo. PUT: modificar un recurso existente. GET: consultar información de un recurso. DELETE: eliminar un recurso determinado.

function TableBody(props) {
  const {
    id_usuario,
    // tx_src_foto,
    tx_nombre,
    tx_apellido,
    tx_email
  } = props.usuario;

  async function deleteUser() {
    const url = `http://localhost:3200/api/v1/delete?id=${id_usuario}`;

    try {
      const response = await fetch(url, {
        method: 'DELETE'
      })

      if (response.status === 200) {
        alert('Usuario eliminado con éxito!');
      } else {
        alert('Error al eliminar usuario. Intente nuevamente.');
      }

    } catch (error) {
      console.log(error)
      alert('No sirvio! Vuelve a revisar! 😟')
    }
  }

  return (
    <tr>
      <td>{id_usuario}</td>
      {/* <td>{tx_src_foto}</td> */}
      <td>{tx_nombre}</td>
      <td>{tx_apellido}</td>
      <td>{tx_email}</td>
      <td>
        <div className="d-grid gap-2">
          <Button
            size='m'
            onClick={() => deleteUser(id_usuario)}
            variant='outline-danger'
          > Delete </Button>
        </div>
      </td>
    </tr>

  )
}

export default TableBody