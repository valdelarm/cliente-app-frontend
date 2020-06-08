import React, { useState }  from 'react';
import '../../App.css';
import ClienteList from './ClienteList';
import AddClienteForm from './AddClienteForm';
import EditClienteForm from './EditClienteForm';
import AppHeader from '../common/Header'

function ClienteView() {
    const clientesData = [
      { id: 1, nome: 'Valdelar', cpf: '2323223' },
      { id: 2, nome: 'Karen', cpf: '2233224444' },
      { id: 3, nome: 'Michele', cpf: '23233' },
    ]

    const initialFormState = { id: null, nome: '', cpf: '' }
  
    const [clientes, setClientes] = useState(clientesData)
    const [editing, setEditing] = useState(false)
    const [currentCliente, setCurrentCliente] = useState(initialFormState)


    const addCliente = cliente => {
      cliente.id = clientes.length + 1
      setClientes([...clientes, cliente])
    }

    const deleteCliente = id => {
      setClientes(clientes.filter(cliente => cliente.id !== id))
    }

    const editRow = cliente => {
      setEditing(true)
    
      setCurrentCliente({ id: cliente.id, nome: cliente.nome, cpf: cliente.cpf })
    }

    const updateCliente = (id, updatedCliente) => {
      setEditing(false)
  
      setClientes(clientes.map(cliente => (cliente.id === id ? updatedCliente : cliente)))
    }
  return (
    <div className="container">
    <h1>Clientes</h1>
    <div className="flex-row">
    <AppHeader />
      <div className="flex-large">
      {editing ? (
    <div>
      <h2>Editar Cliente</h2>
      <EditClienteForm
        setEditing={setEditing}
        currentCliente={currentCliente}
        updateCliente={updateCliente}
      />
    </div>
  ) : (
    <div>
      <h2>Criar Cliente</h2>
      <AddClienteForm addCliente={addCliente} />
    </div>
  )}
      </div>
      <div className="flex-large">
        <h2>Visualizar Clientes</h2>
        <ClienteList clientes={clientes} deleteCliente={deleteCliente} editRow={editRow}/>
      </div>
    </div>
  </div>
  );
}

export default ClienteView;
