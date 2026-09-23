import { useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import ElectricBorder from './components/ElectricBorder/ElectricBorder'
import TechCard from './components/TechCard/TechCard'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  const colors = [
    '#8b5cf6',
    '#3b82f6',
    '#ec4899',
    '#22c55e',
    '#f97316'
  ]

  const [colorIndex, setColorIndex] = useState(0)

  function mudarCor() {
    setColorIndex((colorIndex + 1) % colors.length)
  }

  return (
    <>
      <Navbar />

      <main>
        {/* INÍCIO */}
        <section className="hero" id="inicio">
          <div className="grid-background"></div>

          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>

          <div className="hero-container">
            <div className="hero-text">
              <div className="mini-badge">
                <span></span>
                Projeto desenvolvido em React
              </div>

              <h1>
                Criando experiências
                <span> modernas para web.</span>
              </h1>

              <p>
                Um projeto feito com React, Vite e efeitos visuais
                modernos para mostrar como componentes podem criar
                interfaces bonitas, rápidas e interativas.
              </p>

              <div className="hero-buttons">
                <a href="#projeto" className="button-primary">
                  Conhecer projeto
                  <span>→</span>
                </a>

                <button
                  className="button-secondary"
                  onClick={mudarCor}
                >
                  ✦ Trocar tema
                </button>
              </div>

              <div className="hero-info">
                <div>
                  <strong>100%</strong>
                  <span>React</span>
                </div>

                <div className="separator"></div>

                <div>
                  <strong>Responsivo</strong>
                  <span>Desktop e celular</span>
                </div>

                <div className="separator"></div>

                <div>
                  <strong>Moderno</strong>
                  <span>Interface animada</span>
                </div>
              </div>
            </div>

            <div className="hero-demo">
              <ElectricBorder
                color={colors[colorIndex]}
                speed={1}
                borderRadius={28}
              >
                <div className="demo-window">
                  <div className="window-top">
                    <div className="window-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="window-address">
                      react-project.dev
                    </div>
                  </div>

                  <div className="window-content">
                    <div className="code-decoration code-1">
                      &lt;React /&gt;
                    </div>

                    <div className="react-logo">⚛</div>

                    <h2>React Project</h2>

                    <p>
                      Componentes • Design • Interatividade
                    </p>

                    <div className="demo-tags">
                      <span>React</span>
                      <span>Vite</span>
                      <span>CSS</span>
                    </div>
                  </div>
                </div>
              </ElectricBorder>
            </div>
          </div>

          <a href="#projeto" className="scroll-down">
            <span>Role para explorar</span>
            <div>↓</div>
          </a>
        </section>

        {/* PROJETO */}
        <section className="project-section section" id="projeto">
          <div className="section-title">
            <span className="section-number">01</span>
            <div>
              <span className="section-label">SOBRE</span>
              <h2>Sobre o projeto</h2>
            </div>
          </div>

          <div className="project-grid">
            <div className="project-description">
              <h3>
                Mais do que uma página,
                <span> um projeto completo.</span>
              </h3>

              <p>
                O objetivo deste trabalho é demonstrar na prática a
                criação de uma aplicação usando React, separando cada
                parte da interface em componentes independentes.
              </p>

              <p>
                A página possui navegação, animações, cards,
                responsividade, interações com JavaScript e uma
                identidade visual própria.
              </p>

              <a href="#tecnologias" className="text-link">
                Ver tecnologias utilizadas →
              </a>
            </div>

            <div className="feature-list">
              <div className="feature">
                <div className="feature-icon">01</div>

                <div>
                  <h4>Componentização</h4>
                  <p>
                    Navbar, cards, bordas e rodapé separados
                    em componentes React.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">02</div>

                <div>
                  <h4>Design responsivo</h4>
                  <p>
                    Layout preparado para computadores,
                    tablets e celulares.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">03</div>

                <div>
                  <h4>Interatividade</h4>
                  <p>
                    Elementos reagem às ações do usuário
                    usando estados do React.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">04</div>

                <div>
                  <h4>Efeitos modernos</h4>
                  <p>
                    Gradientes, luzes, animações e efeitos
                    inspirados no React Bits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECNOLOGIAS */}
        <section className="technologies section" id="tecnologias">
          <div className="section-title">
            <span className="section-number">02</span>

            <div>
              <span className="section-label">TECNOLOGIAS</span>
              <h2>Ferramentas utilizadas</h2>
            </div>
          </div>

          <p className="section-description">
            O projeto combina tecnologias modernas de desenvolvimento
            web para criar uma aplicação rápida e organizada.
          </p>

          <div className="tech-grid">
            <TechCard
              icon="⚛"
              number="01"
              title="React"
              description="Biblioteca JavaScript usada para criar interfaces através de componentes reutilizáveis."
              tag="Front-end"
            />

            <TechCard
              icon="⚡"
              number="02"
              title="Vite"
              description="Ferramenta responsável pela criação, desenvolvimento e execução rápida do projeto."
              tag="Ferramenta"
            />

            <TechCard
              icon="◈"
              number="03"
              title="CSS"
              description="Utilizado para criar todo o estilo, animações, responsividade e identidade visual."
              tag="Estilização"
            />

            <TechCard
              icon="✦"
              number="04"
              title="React Bits"
              description="Referência utilizada para adicionar efeitos visuais e deixar a interface mais moderna."
              tag="Efeitos"
            />
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="workflow section" id="funcionamento">
          <div className="section-title">
            <span className="section-number">03</span>

            <div>
              <span className="section-label">PROCESSO</span>
              <h2>Como o projeto funciona</h2>
            </div>
          </div>

          <div className="workflow-line">
            <div className="workflow-item">
              <span>01</span>
              <div className="workflow-circle">⌨</div>
              <h3>Desenvolvimento</h3>
              <p>
                O código é escrito usando componentes React.
              </p>
            </div>

            <div className="workflow-item">
              <span>02</span>
              <div className="workflow-circle">⚛</div>
              <h3>Renderização</h3>
              <p>
                O React monta e atualiza os elementos da página.
              </p>
            </div>

            <div className="workflow-item">
              <span>03</span>
              <div className="workflow-circle">✦</div>
              <h3>Estilização</h3>
              <p>
                O CSS adiciona cores, efeitos e animações.
              </p>
            </div>

            <div className="workflow-item">
              <span>04</span>
              <div className="workflow-circle">✓</div>
              <h3>Resultado</h3>
              <p>
                Uma aplicação moderna e responsiva.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL */}
        <section className="final-section" id="contato">
          <div className="final-light"></div>

          <span className="section-label">PROJETO REACT</span>

          <h2>
            Simples no código.
            <span> Forte no visual.</span>
          </h2>

          <p>
            Projeto desenvolvido como atividade de Informática
            utilizando React e conceitos modernos de desenvolvimento web.
          </p>

          <a href="#inicio" className="button-primary">
            Voltar ao início ↑
          </a>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App