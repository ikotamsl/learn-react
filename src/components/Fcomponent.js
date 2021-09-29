// создание компонента через функцию

import React from 'react';

const Fcomponent = (props) => {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
        </div>
    );
};

export default Fcomponent;