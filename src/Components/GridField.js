import React from 'react';

const GridField = ({randomAnimal}) => {

    return (
        <input className="grid_field">
            {randomAnimal}
        </input>
    );
};

export default GridField;