import React from 'react'

class Navegation extends React.Component {
    render() {
        return (
      <nav class="navbar navbar-expand-lg navbar-dark bgd-secondary p-2 px-5 sticky-top">
        <span class="navbar-brand clickable" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Rogério de Mello</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <span class="nav-link clickable">Início</span>
            </li>
            <li class="nav-item">
              <span class="nav-link clickable">Carreira </span>
            </li>
            <li class="nav-item">
              <span class="nav-link clickable">Diferenciais </span>
            </li>
            <li class="nav-item">
              <span class="nav-link clickable">Escritório </span>
            </li>
          </ul>
        </div>
      </nav>
        )
    }
}

export default Navegation