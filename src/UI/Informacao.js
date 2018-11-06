import React, { Fragment } from 'react';
import Base from './Base';
import git from './imagens/git.png';
import './Informacao.css';

const Informacao = () => {
    return (
        <section id="info" style={{marginTop:"50px"}}>
            <Base value1="MAIS INFORMAÇÕES" value2="OUTRAS INFORMAÇÕES SOBRE MIM" value3="Qualquer tipo de conhecimento é bem vindo, independente do quão relevante possa ser, um dia ele poderá lhe ser útil" />
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <span>BIOGRAFIA</span>
                        <p style={{textAlign: "justify"}}>Em 2013 iniciei minha primeira faculdade em Engenharia de Computação na FURG, por motivos pessoais interrompi a graduação logo no primeiro ano e em 2015 comecei a cursar o mesmo curso na UTFPR de Cornélio Procópio, atualmente me encontro no penúltimo ano curso a procura de estágio prestes a iniciar o TCC.</p>
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <span>PROFISSÃO</span>
                        <p>Conforme me aprofundei na área da Engenharia de Computação pude perceber o quão abrangente é a área com opções de atuação na área de Engenharia propriamente dita e na área de TI. Dadas tantas opções estou empolgado para saber o quanto conseguirei aprender, não é possível aprender tudo mas seria interessante aprender um pouco de tudo.</p>
                    </div>
                </div>
            </div>
            <div style={{textAlign:"center"}}>
                <a href="https://github.com/yudkichi" target="_blank"><img src={git} width="64" height="64"/></a>
            </div>
            <div className="container">
                <h4><a style={{textDecoration:"none"}} href="https://github.com/yudkichi" target="_blank">GITHUB</a></h4>
                <p style={{textAlign:"center"}}>Meu GitHub</p>
            </div>
        </section >            
    );
}

export default Informacao;