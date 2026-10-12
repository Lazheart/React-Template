
import './App.css'

import ChangeToWorkflows from './assets/ChangeToWorkflows.png'
import GoToPages from './assets/GoToPages.png'
import SelectActions from './assets/SelectActions.png'
import Settings from './assets/Settings.png'

const steps = [
  {
    number: '01',
    title: 'Abre Settings',
    description:
      'Ingresa a tu repositorio de GitHub y selecciona la pestaña Settings para acceder a la configuración del proyecto.',
    image: Settings,
    alt: 'Pestaña Settings de GitHub',
  },
  {
    number: '02',
    title: 'Configuración de Despliegues',
    description:
      'En el menú lateral de configuración, busca la sección de Pages.',
    image: GoToPages,
    alt: 'Sección Pages en la configuración del repositorio',
  },
  {
    number: '03',
    title: 'Cambia el método de despliegue',
    description:
      'En Build and deployment, abre el selector Source. Cambia Deploy from a branch por GitHub Actions.',
    image: ChangeToWorkflows,
    alt: 'Cambio de Deploy from a branch a GitHub Actions',
  },
  {
    number: '04',
    title: 'Selecciona GitHub Actions',
    description:
      'Confirma la selección de GitHub Actions. Ahora podrás desplegar la aplicación automáticamente mediante un workflow.',
    image: SelectActions,
    alt: 'Opción GitHub Actions seleccionada',
  },
]

function App() {
  return (
    <main className="tutorial">
      <header className="hero">
        <span className="eyebrow">REACT + VITE · DEPLOYMENT GUIDE</span>
        <h1>
          Publica tu proyecto
          <span> con GitHub Pages</span>
        </h1>
        <p>
          Sigue esta guía para preparar tu repositorio y desplegar tu
          aplicación React utilizando GitHub Actions.
        </p>

        <a className="hero-link" href="#tutorial">
          Comenzar tutorial <span aria-hidden="true">→</span>
        </a>
      </header>

      <section className="intro" id="tutorial">
        <div>
          <span className="section-label">GUÍA PASO A PASO</span>
          <h2>Configura GitHub Pages</h2>
        </div>
        <p>
          Realiza estos cuatro pasos desde la configuración de tu repositorio
          antes de ejecutar el workflow de despliegue.
        </p>
      </section>

      <section className="steps">
        {steps.map((step) => (
          <article className="step-card" key={step.number}>
            <div className="step-content">
              <span className="step-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>

            <div className="step-image">
              <img src={step.image} alt={step.alt} loading="lazy" />
            </div>
          </article>
        ))}
      </section>

      <section className="notice">
        <div className="notice-heading">
          <span className="notice-icon" aria-hidden="true">!</span>
          <h2>Importante: configura Vite</h2>
        </div>
        <p>
          Debes modificar <code>vite.config.ts</code> para que la ruta base
          coincida exactamente con el nombre de tu repositorio.
        </p>

        <div className="code-heading">
          <span>vite.config.ts</span>
          <span>TypeScript</span>
        </div>

        <pre>
          <code>{`import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/React-Template/',
})`}</code>
        </pre>

        <p className="code-explanation">
          Reemplaza <code>React-Template</code> por el nombre de tu repositorio.
          Por ejemplo, si el repositorio se llama <code>mi-proyecto</code>,
          utiliza <code>base: '/mi-proyecto/'</code>.
        </p>
        <p className="warning">
          Si publicas en un repositorio especial llamado
          <code> usuario.github.io</code>, normalmente debes usar
          <code> base: '/'</code>.
        </p>
      </section>

      <footer className="tutorial-footer">
        <p>Una vez configurado, prepara tu workflow de GitHub Actions y ejecuta el despliegue.</p>
        <a
          href="https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages"
          target="_blank"
          rel="noreferrer"
        >
          Consultar documentación oficial <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </main>
  )
}

export default App
