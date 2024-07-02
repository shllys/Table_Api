import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Form(props) {
  const [numUsuario, setNumUsuario] =useState('')
  const [numDocument, setNumDocument] =useState('')
  const [nombre, setNombre] =useState('')
  const [apellido, setApellido] =useState('')
  const [email, setEmail] =useState('')
  const [stUsuario, setStUsuario] =useState('')
  const [birthdate, setBirthdate] =useState('')

    async function addUser() {
        const body = {
          id_usuario: numUsuario,
          id_documento: numDocument,
          tx_nombre: nombre,
          tx_apellido: apellido,
          tx_email: email,
          st_usuario: stUsuario,
          // tx_src_foto: "/path/to/photo.jpg",
          // tx_alt_src_foto: "Alternative text for photo",
          dt_fecha_nacimiento: birthdate,
        };
        console.log(body);
        const url = 'http://localhost:3200/api/v1/insertUser';


        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
          })

          if (response.status == 200) {
            alert('Usuario agregado con éxito!');
          } else {
            alert('Error al agregar usuario. Intente nuevamente.');
          }

        } catch (error) {
          console.log(error)
          alert('No sirvio! Vuelve a revisar! 😟')
        }
      }

  return (
    <div className='screen'>
      <h2>_Add Info_</h2>
      <form action="#" method="post">
        <label for="name" >id_usuario</label>
        <input
        onChange={(e) => setNumUsuario(e.target.value)} value={numUsuario}
        className='num'
        type="number"
        required
        />

        <hr />
        <div className='principal'>
          <label for="name">tx_nombre</label>
          <br />
          <input
          onChange={(e) => setNombre(e.target.value)} value={nombre}
          type="text"
          required 
          />
          <br />
          <label for="name">tx_apellido</label>
          <br />
          <input
          onChange={(e) => setApellido(e.target.value)} value={apellido} 
          type="text" 
          required 
          />
          {/* <br />
          <label for="name">tx_src_foto</label>
          <br />
          <input
          onChange={(e) => set(e.target.value)} value={nombre}
          type="text" 
          /> */}
          <br />
          <label for="name">tx_email</label>
          <br />
          <input
          onChange={(e) => setEmail(e.target.value)} value={email}
          type="email" 
          required 
          />
          <br />
        </div>

        <hr />

        <div className="more">
          <label for="name" required>st_usuario</label>
          <br />
          <input
          onChange={(e) => setStUsuario(e.target.value)} value={stUsuario}
          type="text" />
          <br />
          <label for="name" required>id_documento</label>
          <br />
          <input
          onChange={(e) => setNumDocument(e.target.value)} value={numDocument}
          type="number" />
          <br />
          <label for="name">dt_fecha_nacimiento</label>
          <br />
          <input
          onChange={(e) => setBirthdate(e.target.value)} value={birthdate}
          type="date" />
        </div>
        <hr />

        <Button variant='dark' className='center' size="m" onClick={addUser}>
          POST
        </Button>

      </form>
    </div>
  )
}

export default Form