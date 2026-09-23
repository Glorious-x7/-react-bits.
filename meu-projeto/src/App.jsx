import { useState } from 'react'

import ElectricBorder from './components/ElectricBorder/ElectricBorder'
import Navbar from './components/Navbar/Navbar'
import TechCard from './components/TechCard/TechCard'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  const colors = [
    '#7c3aed',
    '#2563eb',
    '#ec4899',
    '#22c55e',
    '#f97316'
  ]

  const [colorIndex, setColorIndex] = useState(0)

  function mudarCor() {
    setColorIndex(
      (colorIndex + 1) % colors.length
    )
  }

  return (
    <>
      <Navbar />

      <main>

        <section
          className="hero"
          id="inicio"
        >
          <div className="background-light light-1"></div>
          <div className="background-light light-2"></div>

          <ElectricBorder
            color={colors[colorIndex]}
            speed={1.2}
            chaos={0.6}
            borderRadius={24}
          >
            <div className="hero-card">

              <div className="badge">
                React Bits
              </div>

              <h1>
                Projeto
                <span> React</span>
              </h1>

              <p>
                Uma página moderna usando React,
                CSS e efeitos animados.
              </p>

              <button
                className="primary"
                onClick={mudarCor}
              >
                Trocar cor da borda
              </button>

            </div>
          </ElectricBorder>
        </section>

        <section
          className="about-section"
          id="projeto"
        >
          <h2>Sobre o projeto</h2>

          <p>
            Este projeto foi desenvolvido para
            demonstrar componentes em React,
            estilização com CSS e efeitos visuais
            inspirados no React Bits.
          </p>
        </section>

        <section
          className="tech-section"
          id="tecnologias"
        >
          <h2>Tecnologias usadas</h2>

          <div className="cards">
            <TechCard
              icon="⚛️"
              title="React"
              description="Biblioteca utilizada para criar os componentes da página."
            />

            <TechCard
              icon="⚡"
              title="Vite"
              description="Ferramenta utilizada para criar e executar o projeto React."
            />

            <TechCard
              icon="✨"
              title="React Bits"
              description="Biblioteca de inspiração para os efeitos visuais."
            />
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default App