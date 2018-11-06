import React from 'react';

const Rodape = (props) => {
    return(
        <footer id="rodape" style={{marginTop:"50px"}}>
            <div>
                <div className="container clearfix">
                    <p><strong>{props.nome}</strong><br/><strong>{props.curso}</strong><br/><strong>{props.email}</strong><br/><strong>{props.tel}</strong></p>
                </div>
            </div>
        </footer>
    );
}

export default Rodape;