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

  //  peticionDelete=()=>{
  //   axios.delete(url+this.state.form.id).then(response=>{
  //     this.setState({modalEliminar: false});
  //     this.peticionGet();
  //   })
  // }

  // removeCategory (id) {
  //   fetch (`http://localhost:3200/api/v1/getAllUsers/${id}`, {
  //     method: 'DELETE'
  //   })
  //   .then(res => res.json())
  //   .then(res => {
  //     if (res.usuarios) {
  //       let categories = this.state.usuarios.filter(c => c.id !== id);
  //       // this.setState({ categories });
  //       alert('Categoría eliminada');
  //     }
  //   });
  // }

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
      // onClick={deleteUser}
      variant='outline-danger'
      > Delete </Button>
      </div>
      </td>
    </tr>
    
  )
}

export default TableBody