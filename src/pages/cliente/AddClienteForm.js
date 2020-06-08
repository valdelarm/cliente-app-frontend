import React, { Component } from 'react'
import ApiCep from '../../services/ApiCep'

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

    this.handleChange = this.handleChange.bind(this)
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
     
     
    }}>
      <label>Nome</label>
      <input type="text" name="nome" placeholder="Nome" required="true" onChange={this.handleChange}/>
      <label>CPF</label>
      <input type="number" name="cpf" placeholder="CPF" maxLength='11' required="true" onChange={this.handleChange}/>
      <label>CEP</label>
      <input type="number" name="cep"  placeholder="CEP" onBlur={ this.handleCep.bind(this)} required="true"/>
      <label>Logradouro</label>
      <input type="text" name="logradouro" value={this.state.logradouro} placeholder="Logradouro" 
        onChange={this.handleChange}/>
      <label>Bairro</label>
      <input type="text" name="bairro" value={this.state.bairro} placeholder="Bairro" 
        onChange={this.handleChange}/>
      <label>Cidade</label>
      <input type="text" name="cidade" value={this.state.cidade} placeholder="Cidade" 
        onChange={this.handleChange}/>
      <label>UF</label>
      <input type="text" name="uf" value={this.state.uf} placeholder="UF" onChange={this.handleChange}/>

      <button>Adicionar novo cliente</button>
    </form>
  )
}

}
export default AddClienteForm