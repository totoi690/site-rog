import React from 'react'

class Navegation extends React.Component {
    render() {
        return (
<nav class="navbar navbar-expand-lg navbar-dark bgd-secondary p-2 px-5 sticky-top">
  <a class="navbar-brand" href="#">Rogério de Mello</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Início</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Carreira </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Diferenciais </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Escritório </a>
      </li>
    </ul>
  </div>
</nav>
        )
    }
}

export default Navegation