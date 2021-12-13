import React, { Component } from 'react'
import App from '../App'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link className="nav-link" to ="/">Main</Link>
                  <Link className="nav-link" to ="/Electrodomestico">Electrodomesticos</Link>
                  <Link className="nav-link" to ="/Refrigeradora">Estadistica Refrigeradora</Link>
                  <Link className="nav-link" to ="/cocina">Estadistica cocina</Link>
                </div>
              </div>
            </div>
          </nav>  
        )
    }
}
