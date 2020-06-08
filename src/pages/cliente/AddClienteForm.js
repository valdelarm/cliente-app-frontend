import React, { useState, Component } from 'react'
import ApiCep from '../../services/ApiCep'
import { render } from '@testing-library/react'


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
      uf: ''
    }
}

handleCep(e) {
  const cep = e.target.value;
  ApiCep.SearchCep(cep).then((res) => {
    let logradouro = res.data.logradouro;
    let bairro    = res.data.bairro;
    let cidade    = res.data.localidade;
    let uf    = res.data.uf;
    this.setState({
      logradouro : logradouro,
      bairro: bairro,
      cidade: cidade,
      uf: uf
    })
  })
}


handleInputChange = event => {
}

render() {
  return (
    <form onSubmit={event => {
      event.preventDefault()
     
     
    }}>
      <label>Nome</label>
      <input type="text" name="nome" placeholder="Nome" required="true"/>
      <label>CPF</label>
      <input type="number" name="cpf" value={this.state.cpf} placeholder="CPF" maxLength='11' required="true"/>
      <label>CEP</label>
      <input type="number" name="cep"  placeholder="CEP" onBlur={ this.handleCep.bind(this)} required="true"/>
      <label>Logradouro</label>
      <input type="text" name="rua" value={this.state.logradouro} placeholder="Logradouro"/>
      <label>Bairro</label>
      <input type="text" name="bairro" value={this.state.bairro} placeholder="Bairro"/>
      <label>Cidade</label>
      <input type="text" name="rua" value={this.state.cidade} placeholder="Cidade"/>
      <label>UF</label>
      <input type="text" name="uf" value={this.state.uf} placeholder="UF"/>

      <button>Adicionar novo cliente</button>
    </form>
  )
}

}
export default AddClienteForm