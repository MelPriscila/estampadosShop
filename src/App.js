import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Inicio</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">Productos</a>
          <a className="nav-link" href="#">Contacto</a>
          <a className="nav-link" href="#">Guía de talleres</a>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default App;
