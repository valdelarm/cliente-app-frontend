import React, { useState, useEffect}  from 'react';
import '../../App.css';
import ClienteList from './ClienteList';
import AddClienteForm from './AddClienteForm';
import EditClienteForm from './EditClienteForm';
import AppHeader from '../common/Header'
import {getClientes, deleteClientePorId} from '../../services/Api'

function ClienteView() {

    const initialFormState = { id: null, nome: '', cpf: '', cep: '', logradouro: '' }
  
    const [clientes, setClientes] = useState([])
    const [editing, setEditing] = useState(false)
    const [currentCliente, setCurrentCliente] = useState(initialFormState)

    useEffect(() => {
      getAllClientes();
    }, []);

    async function getAllClientes() {
      getClientes().then(response => {
        setClientes(response)
      })
    }

    const addCliente = cliente => {
      cliente.id = clientes.length + 1
      setClientes([...clientes, cliente])
    }

    
    function deleteCliente(id) {
      deleteClientePorId(id).then(response => {
      })

      window.location.reload()

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
      </div>
      <div className="flex-row">
      <div className="flex-large">
        <h2>Visualizar Clientes</h2>
        <ClienteList clientes={clientes} deleteCliente={deleteCliente} editRow={editRow}/>
      </div>
    </div>
  </div>
  );
}

export default ClienteView;
