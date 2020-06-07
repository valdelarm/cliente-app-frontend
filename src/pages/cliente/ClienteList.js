import React from 'react'

const ClienteList = props => (
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {props.clientes.length > 0 ? (
                props.clientes.map(cliente => (
                    <tr key={cliente.id}>
                        <td>{cliente.nome}</td>
                        <td>{cliente.cpf}</td>
                        <td>
                            <button onClick={() => {props.editRow(cliente) }}className="button muted-button">
                                    Editar
                                </button>
                            <button onClick={() => props.deleteCliente(cliente.id)} className="button muted-button">
                                Excluir
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                    <tr>
                        <td colSpan={3}>Não há clientes cadastrados!</td>
                    </tr>
                )}
        </tbody>
    </table>
)

export default ClienteList