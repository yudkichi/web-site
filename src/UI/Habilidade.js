import React from 'react';
import Base from './Base';
import './Habilidade.css';

const Habilidade = () => {
    return(
        <section id="skill" style={{marginTop:"50px"}}>
            <Base value1="SKILLS" value2="TECNOLOGIA E PERFIL PESSOAL" value3="Algumas dos meus conhecimentos e perfil pessoal"/>
            <div className="container">
                <ul>
                    <li>C</li>
                    <li>Java</li>
                    <li>SQL</li>
                    <li>CSS</li>
                    <li>HTML5</li>                    
                    <li>Adaptabilidade</li>
                    <li>Trabalho em Grupo</li>
                    <li>Proatividade</li>
                </ul>
            </div>
        </section>
    );
}

export default Habilidade;