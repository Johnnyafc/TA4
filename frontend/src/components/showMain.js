import React, { Component } from 'react'
export default class ShowRefrigeradoras extends Component {
    render() {
        return (
<div className="row mx-3">
<div className="col-md-4">
    <div className="card card-body">
        <h4>Welcome Usuario</h4>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
            <img src="frontend\src\images\Casa.png" class="img-fluid" alt="Bienvenido a Smart Home" width="2000" height="3000"></img>
            </div>
        </form>
    </div>
</div>

</div>

        )
    }
     
    
    onSubmit = async (e)=>{

    }
    


}