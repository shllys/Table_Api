import React from 'react'
import Button from 'react-bootstrap/Button';


// POST: crear un recurso nuevo. PUT: modificar un recurso existente. GET: consultar información de un recurso. DELETE: eliminar un recurso determinado.

function TableBodyMore(props) {
  const {
    id_usuario,
    dt_fecha_nacimiento,
    st_usuario,
    id_documento
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
      <td>{st_usuario}</td>
      <td>{id_documento}</td>
      <td>{dt_fecha_nacimiento}</td>
      <td>
      <div className="d-grid gap-2">
      <Button
      onClick={() => deleteUser(id_usuario)}
      variant='outline-danger'
      >
        Delete
      </Button>
      </div>
      </td>
    </tr>
  )
}

export default TableBodyMore