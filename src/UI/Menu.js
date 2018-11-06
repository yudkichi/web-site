import React from 'react';

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-faded fixed-top">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>        
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#perfil">Perfil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skill">Habilidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portifolio">Portifolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#info">Informação</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contato">Contato</a>
            </li>
          </ul>       
        </div>
      </nav>
    );
};

export default Menu;