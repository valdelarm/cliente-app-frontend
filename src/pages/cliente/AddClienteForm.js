import React, { Component } from 'react'
import ApiCep from '../../services/ApiCep'
import { saveCliente } from '../../services/Api'
import {notification} from 'antd'

class AddClienteForm extends Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      cpf: '',
      cep: '',
      logradouro: '',
      bairro: '',
      cidade: '',
      uf: '',
      complemento: '',
      telefone: '',
      email: ''
    }

    this.handleChange = this.handleChange.bind(this)
}

handleCep(e) {
  const cep = e.target.value;
  ApiCep.SearchCep(cep).then((res) => {
    let logradouro = res.data.logradouro;
    let bairro    = res.data.bairro;
    let cidade    = res.data.localidade;
    let uf        = res.data.uf;
    this.setState({
      logradouro : logradouro,
      bairro: bairro,
      cidade: cidade,
      uf: uf,
      cep: cep
    })
  })
}

handleChange(e) {
  const field = e.target.name
  const value = e.target.value
  this.setState({
    [field] : value
  })
}

render() {
  return (
    <form onSubmit={event => {
      event.preventDefault()
     
      saveCliente(this.state).then(response => {
        notification.success({
          message: 'Cliente App',
          description: 'Cliente salvo com sucesso!'
      }); 

      window.location.reload()
    }).catch(error => {
      if(error.status === 403) {
        notification.error({
            message: 'Cliente App',
            description: 'Essa operação requer perfil de Administrador!'
        });                    
      } else {
            notification.error({
                message: 'Cliente App',
                description: error.message || 'Desculpe! Algo errado aconteceu.  Por favor tente novamente!'
            });                                            
      }
    });
     
    }}>
      <label>Nome</label>
      <input type="text" name="nome" placeholder="Nome" required="true" onChange={this.handleChange}/>
      <label>CPF</label>
      <input type="number" name="cpf" placeholder="CPF" maxLength='11' required="true" onChange={this.handleChange}/>

      <label>CEP</label>
      <input type="number" name="cep"  placeholder="CEP" onBlur={ this.handleCep.bind(this)} required="true"/>
      <label>Logradouro</label>
      <input type="text" name="logradouro" value={this.state.logradouro} placeholder="Logradouro" 
        onChange={this.handleChange} required="true"/>
      <label>Bairro</label>
      <input type="text" name="bairro" value={this.state.bairro} placeholder="Bairro" 
        onChange={this.handleChange} required="true"/>
      <label>Cidade</label>
      <input type="text" name="cidade" value={this.state.cidade} placeholder="Cidade" 
        onChange={this.handleChange} required="true"/>
      <label>UF</label>
      <input type="text" name="uf" value={this.state.uf} placeholder="UF" onChange={this.handleChange} required="true"/>
      <label>Complemento</label>
      <input type="text" name="complemento" placeholder="Complemento" onChange={this.handleChange}/>

      <label>Telefone</label>
      <input type="number" name="telefone" placeholder="Telefone" onChange={this.handleChange}/>
      <label>E-mail</label>
      <input type="text" name="email" placeholder="E-mail" onChange={this.handleChange}/>

      <button>Adicionar novo cliente</button>
    </form>
  )
}

}
export default AddClienteForm