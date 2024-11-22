import './App.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="main-container">
      <div className="navbar">
        <div className="logo">
          <img src='/assets/images/image 84.png' alt="Logo" />
        </div>
        <div className="menu">
          <Link to="/quemsomos" className="menu-item quem">Quem Somos</Link>
          <a href="#tratamentos" className="menu-item tratamentos">Tratamentos</a>
          <Link to="/Contato" className="menu-item contato">Contato</Link>
        </div>

      </div>

      <div className="hero">
        <div className="hero-image">
          <img src="/assets/images/home 1.png" alt="Saúde Bucal" />
        </div>
        <div className="hero-text">
          <h1>
            <span className="highlight">Dental</span>Clinic
          </h1>
          <p>Adoramos ver sorrisos felizes</p>
          <h2>Vamos fazer da sua saúde bucal uma prioridade!</h2>
          <button className="cta-button">Agendar Consulta</button>
        </div>
      </div>
      <section className="about-section">
        <div className="about-container">
          <h2>Quem Somos</h2>
          <div className="about-content">
            <p>
              DentalClinic é cirurgia dentista com experiência de mais de 15 anos e
              conta com um profissional formado por especialistas em diferentes
              áreas da odontologia, que trabalham visando sempre o melhor resultado
              estético e funcional para os casos clínicos planejados.
            </p>
            <p>
              Nossa filosofia é buscar sempre o aprimoramento técnico científico
              aliado ao atendimento humanizado, com equipamentos de alta tecnologia
              do mercado, que proporciona o tratamento mais adequado a todos os
              pacientes!
            </p>
            <p>
              Unimos tradição e tecnologia ao oferecer um modelo de tratamento
              diferenciado, que garante sucesso nos resultados, reconhecimento e a
              satisfação de nossos clientes, pois é o seu sorriso que move o nosso
              trabalho!
            </p>
            <p>
              A Clínica DentalClinic possui a melhor estrutura para receber seus
              pacientes, com 1 consultório altamente equipado, recepção climatizada,
              área de esterilização para a segurança dos pacientes e uma sala
              reservada para repouso do paciente ou acompanhante, tornando assim
              mais confortável e aconchegante o seu período de espera.
            </p>
            <p>
              Contamos com especialistas nas diversas áreas da odontologia,
              incluindo estética.
            </p>
          </div>
        </div>
      </section>
      <section id="tratamentos" className="tratamentos">
        <h2>Tratamentos para transformar o seu sorriso</h2>
        <div className="tratamento-cards">
          <div className="card">
            <img
              src="/assets/images/odontologia estetica.png"
              alt="Odontologia Estética"
            />
            <h3>Odontologia Estética</h3>
            <a href="#" className="card-link">
              saiba mais
            </a>
          </div>
          <div className="card">
            <img src="/assets/images/Ortodontia.png" alt="Limpeza Bucal" />
            <h3>Limpeza Bucal</h3>
            <a href="#" className="card-link">
              saiba mais
            </a>
          </div>
          <div className="card">
            <img src="/assets/images/Higiene bucal.png" alt="Higiene Bucal" />
            <h3>Higiene Bucal</h3>
            <a href="#" className="card-link">
              saiba mais
            </a>
          </div>
          <div className="card">
            <img
              src="/assets/images/Tratamento Odontologico.png"
              alt="Tratamento Odontológico"
            />
            <h3>Tratamento Odontológico</h3>
            <a href="#" className="card-link">
              saiba mais
            </a>
          </div>
          <div className="card">
            <img src="/assets/images/Cirurgia Dentaria.png" alt="Cirurgia Dentária" />
            <h3>Cirurgia Dentária</h3>
            <a href="#" className="card-link">
              saiba mais
            </a>
          </div>
          <div className="card">
            <img
              src="/assets/images/Implantes Dentarios.png"
              alt="Implantes Dentários"
            />
            <h3>Implantes Dentários</h3>
            <a href="#" className="card-link">
              saiba mais
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
