import React from 'react';
import SearchBar from './components/SearchBar';
import ProductCatalog from './components/ProductCatalog';
import Footer from './components/Footer';


function App() {
  return (
    <div className="container mt-5">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Ecommerce App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contactos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Acerca de
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="mt-4">
        <h1 className="mb-4 text-center">Bienvenido a nuestra tienda en línea</h1>
        <ProductCatalog />
        <hr className="mt-4" />
        <SearchBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;