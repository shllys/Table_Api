import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
];

const App = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleEdit = (userId) => {
    console.log(`Edit user with ID: ${userId}`);
    // ... Falta esto para que se edite la tabla
  };

  const handleDelete = (userId) => {
    console.log(`Delete user with ID: ${userId}`);
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <Container className='mt-5'>
      <h1>User Table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button variant='warning' onClick={() => handleEdit(user.id)}>
                  Edit
                </Button>
              </td>
              <td>
                <Button variant='danger' onClick={() => handleDelete(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
