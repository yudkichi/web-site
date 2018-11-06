import React, {Fragment} from 'react';

const Noticia = (props) => {
    return (
        <Fragment>
            <div className="card mb-4 shadow-sm">
                <div className="card-topo">
                    <h4 className="my-0 font-weight-normal">{props.titulo}</h4>
                </div>
                <div className="card-corpo">
                    <h1 class="card-title pricing-card-title">{props.data} <small class="text-muted">{props.autor}</small></h1>
                    <p>{props.previa}</p>
                    <button type="button" class="btn btn-lg btn-block btn-outline-primary">Reportagem Completa</button>
                </div>
            </div>
        </Fragment>
    );
}

export default Noticia;