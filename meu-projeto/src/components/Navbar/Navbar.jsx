import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function fecharMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <a href="#inicio" className="navbar-logo">
        <div className="logo-icon">R</div>

        <div>
          <strong>React</strong>
          <span>Project</span>
        </div>
      </a>

      <nav className={menuOpen ? 'nav-open' : ''}>
        <a href="#inicio" onClick={fecharMenu}>
          Início
        </a>

        <a href="#projeto" onClick={fecharMenu}>
          Projeto
        </a>

        <a href="#tecnologias" onClick={fecharMenu}>
          Tecnologias
        </a>

        <a href="#funcionamento" onClick={fecharMenu}>
          Processo
        </a>

        <a
          href="#contato"
          className="nav-button"
          onClick={fecharMenu}
        >
          Explorar
        </a>
      </nav>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>
    </header>
  )
}

export default Navbar