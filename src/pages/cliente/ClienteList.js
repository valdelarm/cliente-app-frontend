import React from 'react'

const ClienteList = props => (
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>CEP</th>
                <th>Logradouro</th>
                <th>Bairro</th>
                <th>Cidade</th>
                <th>UF</th>
                <th>Telefone</th>
                <th>E-mail</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {props.clientes.length > 0 ? (
                props.clientes.map(cliente => (
                    <tr key={cliente.id}>
                        <td>{cliente.nome}</td>
                        <td>{cliente.cpf}</td>
                        <td>{cliente.cep}</td>
                        <td>{cliente.logradouro}</td>
                        <td>{cliente.bairro}</td>
                        <td>{cliente.cidade}</td>
                        <td>{cliente.uf}</td>
                        <td>{cliente.telefone}</td>
                        <td>{cliente.email}</td>
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