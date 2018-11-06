import React, {Fragment} from 'react';
import Base from './Base';
import Noticia from './Noticia';
import './Blog.css';

const Blog = () => {
    return (
            <section id="blog" style={{marginTop:"50px"}}>
                <Base value1="BLOG" value2="TAIKO" value3="Notícias sobre Taiko"/>
                <div className="container">
                    <div className="card-deck mb-3 text-center" style={{paddingLeft:"30px", paddingRight:"30px"}}>
                        <Noticia titulo="Festival Paranaense de Taikô" data="04/10/2018" atuor="Kotobuki Taiko" previa="Paranavaí sediará XV Festival Paranaense de Taikô"/>
                        <Noticia titulo="Campeonato Brasileiro de Taikô" data="20/08/2018" atuor="Hideki Nakamura" previa="Serra Negra sedia Campeonato Brasileiro de Taikô"/>
                        <Noticia titulo="Campeão Brasileiro de Taikô" data="11/09/2018" atuor="Letícia Pinheiro" previa="Taiko de Dracena é o melhor do Brasil na categoria junior"/>
                    </div>
                </div>
            </section>
    );
}

export default Blog;