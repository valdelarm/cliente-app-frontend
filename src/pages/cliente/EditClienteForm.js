import React, { useState, useEffect} from 'react'

const EditClienteForm = props => {
  const [cliente, setCliente] = useState(props.currentCliente)

  useEffect(() => {
    setCliente(props.currentCliente)
  }, [props])

  const handleInputChange = event => {
    const { nome, value } = event.target

    setCliente({ ...cliente, [nome ]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateCliente(cliente.id, cliente)
      }}
    >
      <label>Name</label>
      <input type="text" name="nome" value={cliente.nome} onChange={handleInputChange} />
      <label>CPF</label>
      <input type="text" name="cpf" value={cliente.cpf} onChange={handleInputChange} />
      <button>Atualizar Cliente</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancelar
      </button>
    </form>
  )
}

export default EditClienteForm