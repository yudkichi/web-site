import React, { Fragment } from 'react';

const Base = (props) => {
    return (
        <Fragment>
            <h2>{props.value1}</h2>
            <h4>{props.value2}</h4>
            <p>{props.value3}</p>
        </Fragment>
    );
}

export default Base;