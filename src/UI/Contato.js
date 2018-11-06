import React from 'react';
import Base from './Base';
import facebook from './imagens/facebook.png';
import linkedin from './imagens/linkedin.png';
import './Contato.css'

const Contato = () => {
    return (
        <section id="contato" style={{marginTop:"50px"}}>
            <Base value1="CONTATO" value2="ENTRE EM CONTATO" value3="Entre em contato pelo formulario ou redes sociais abaixo" />
            <div className="container">
                <form style={{padding: "5px" }}>
                    <div className="form-group">
                        <label for="nameform">Nome</label>
                        <input type="name" className="form-control" id="namecontrol" placeholder="Digite seu nome"></input>
                    </div>
                    <div className="form-group">
                        <label for="emailform">E-mail</label>
                        <input type="name" className="form-control" id="emailcontrol" placeholder="Digite seu Email"></input>
                    </div>
                    <div className="form-group">
                        <label for="emailform">Assunto</label>
                        <input type="name" className="form-control" id="emailcontrol" placeholder="Digite o Assunto da Mensagem"></input>
                    </div>
                    <div className="form-group">
                        <label for="mensagemform">Mensagem</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Digite sua Mensagem"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-dark">ENVIAR</button>
                </form>
            </div>
            <div className="container" style={{textAlign:"center"}}>
                <Base value2="Redes Sociais"/>
                <span><a href="https://www.facebook.com/yudigabriel.kichi" target="_blank" style={{padding:"5px"}}><img src={facebook} width="30" height="30"/></a><a href="https://www.linkedin.com/in/yudi-gabriel-kichi-bb810415b/" target="_blank" style={{padding:"5px"}}><img src={linkedin} width="30" height="30"/></a></span> 
            </div>
        </section>
    );
}

export default Contato;