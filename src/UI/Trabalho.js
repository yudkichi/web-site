import React, {Fragment} from 'react';

const Trabalho = (props) => {
    return (
        <Fragment>
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img className="card-img-top" style={{height:"225px", width:"100%", display:"block"}} src={props.img}/>
                    <div class="card-corpo">
                        <p class="text">{props.descricao}</p>
                    </div>
                </div>            
            </div>
        </Fragment>
    );
}

export default Trabalho;