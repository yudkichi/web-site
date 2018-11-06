import React from 'react';
import {relative} from 'path';
import foto from './photo.jpg';
import curriculo from './curriculo.pdf';
import './Perfil.css';

const Perfil = () => {
    return(
        <section id="perfil">
            <div className="container" style={{marginTop:100}}>
                <div className="row">
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <img src={foto} width="500" height="300"/>
                        <p  style={{marginTop:10}}>Meu nome é Yudi Gabriel Kichi, sou estudante de Engenharia de Computação, nascido em Tajimi - Japão atualmente moro em Cornélio Procópio - PR </p>
                        <a href={curriculo} target="_blank" download="curriculo.pdf"><button>CURRÍCULO</button></a>
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <h1>YUDI GABRIEL KICHI</h1>
                        <div style={{marginTop:"20px"}}>
                            <h2>INTERESSES</h2>
                            <ul>
                                <li>Segurança da Informação</li>
                                <li>Banco de Dados</li>
                                <li>Web</li>
                                <li>Línguas Estrangerias</li>
                            </ul>                                                        
                        </div>
                        <div style={{marginTop:"20px"}}>
                            <h2>IDIOMAS</h2>
                            <ul>
                                <li>Inglês Intermediário B1</li>
                                <li>Japonês Intermediário N3</li>
                            </ul>                            
                        </div>
                        <div style={{marginTop:"20px"}}>
                            <h2>FORMAÇÃO</h2>
                            <ul>
                                <li>2012 - Ensino Médio</li>
                                <li>2019/UTFPR - Engenharia de Computação</li>
                            </ul>                            
                        </div>
                        <div style={{marginTop:"20px"}}>
                            <h2>ATIVIDADES DESENVOLVIDAS</h2>
                            <ul>
                                <li>Projeto de Extensão de ensino da Língua Inglesa - Professor</li>                                
                            </ul>                            
                        </div>
                    </div>
                </div>
            </div>            
        </section>                
    );
};

export default Perfil;