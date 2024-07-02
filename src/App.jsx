import { Container, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import TableBody from './components/TableBody';
import TableBodyMore from './components/TableBodyMore';
import Form from './components/Form';
import './App.scss';


const App = () => {
  const [user, setUser] = useState([])

  const FetchingData = () => {
    const url = 'http://localhost:3200/api/v1/getAllUsers';

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setUser(response.usuarios);
      })
  }

  useEffect(() => {
    FetchingData()
  }, [])

  // usersList----  (Mostrar/Ocultar Lista de Usuariios)
  const [seeList, setSeeList] = useState(true)

  const openList = seeList ? 'MOSTRAR LISTA' : 'OCULTAR LISTA'
  const acList = seeList ? 'list' : ''

  const handleClick = () => {
    setSeeList(!seeList)
  }

  // usersList----  (Mostrar/Ocultar Mas informacion)
  const [seeInfo, setSeeInfo] = useState(true)

  const acInfo = seeInfo ? 'open' : ''

  const handleOpen = () => {
    setSeeInfo(!seeInfo)
  }
  // -----------
  // -------

  const headers = ["ID", "Nombre", "Apellido", "Correo", "Eliminar"]
  const headersMore = ["ID", "Estado", "Cedula", "Fecha-Nacimiento", "Eliminar"]

  return (
    <div className="column">
      <Form />

      <Container className='mt-4'>

        <div className='title'>
          <h1>Tabla de Usuarios</h1>
          <img className='size' src="./src/icons/undraw_Add_user_re_5oib.png" alt="" />
        </div>
        <div className="buttons">
          <Button variant='primary' onClick={handleClick}>{openList}</Button>
          <img className='size' src="./src/icons/undraw_Grades_re_j7d6.png" alt="" />
        </div>

        <div className={acList}>
          <Table>
            <thead>
              <tr>
                {headers.map((elemento) => {
                  return <th>{elemento}</th>
                })}
              </tr>
            </thead>
            <tbody>
              {user.map((usuario) => {
                return <TableBody usuario={usuario} />
              })}
            </tbody>
          </Table>
          <div className="right">
            <Button variant='dark' className='center' size="m">
              ACTUALIZAR
            </Button>
          </div>
          <div className="d-grid gap-2">
            <Button variant='success' className='center' size="m" onClick={handleOpen}>
              MORE INFO
            </Button>
          </div>
          <Table className={acInfo}>
            <thead>
              <tr>
                {headersMore.map((elemento) => {
                  return <th>{elemento}</th>
                })}
              </tr>
            </thead>
            <tbody>
              {user.map((usuario) => {
                return <TableBodyMore usuario={usuario} />
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  )
}

export default App;
