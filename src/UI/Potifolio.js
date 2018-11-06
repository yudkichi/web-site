import React from 'react';
import Base from './Base';
import Trabalho from './Trabalho';
import img1 from './imagens/abrindoportas.png';
import img2 from './imagens/android.jpg';
import './Portifolio.css';

const Portifolio = () => {
    return (
        <section id="portifolio" style={{marginTop:"50px"}}>
            <Base value1="PORTIFOLIO" value2="FACULDADE" value3="Trabalhos desenvolvidos até o momento" />
            <div className="album py-5">
                <div className="container">
                    <div className="row">
                        <Trabalho img={img1} descricao="Professor Projeto de Extensão Abrindo Portas do ensino da Língua Inglesa para ensino médio de escolas públicas." />
                        <Trabalho img={img2} descricao="Trabalho de faculdade: desenvolvimento de um aplicativo de dicionário pessoal em plataforma android." />                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portifolio;