import React, { Component } from 'react'
export default class ShowElectrodomesticos extends Component {
    render() {
        return (
<div className="row mx-3">
<div className="col-md-4">
    <div className="card card-body">
        <h4>Electrodomesticos con medicones mas altas</h4>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">

            <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Consumo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Refrigeradora</td>
      <td>150</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Cocina</td>
      <td>110</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Horno</td>
      <td>105</td>
    </tr>
  </tbody>
</table>
            </div>
            <button className="btn btn-primary my-3" type='submit'>Actualizar</button>
        </form>
    </div>
</div>

</div>

        )
    }
     
    
    onSubmit = async (e)=>{

    }
    


}