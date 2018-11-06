import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './UI/Menu';
import Perfil from './UI/Perfil';
import Habilidade from './UI/Habilidade';
import Blog from './UI/Blog';
import Potifolio from './UI/Potifolio';
import Informacao from './UI/Informacao';
import Contato from './UI/Contato';
import Rodape from './UI/Rodape';

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Perfil/>
        <Habilidade/>
        <Blog/>
        <Potifolio/>
        <Informacao/>
        <Contato/>
        <Rodape nome="Yudi Gabriel Kichi" curso="Engenharia de Computação" email="yudi_kichi@hotmail.com" tel="+55 (18) 99693-1013"/>
      </div>                 
    );
  }
}

export default App;
