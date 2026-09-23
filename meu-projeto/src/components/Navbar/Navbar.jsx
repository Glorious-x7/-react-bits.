import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <h2>React Bits</h2>

      <nav>
        <a href="#inicio">Início</a>
        <a href="#projeto">Projeto</a>
        <a href="#tecnologias">Tecnologias</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  )
}

export default Navbar