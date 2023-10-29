import React from 'react';

const Keyboard = ({data}) => {

    return (
        <div className="keyboard">
            {data.map(animal => {
                const {id, image} = animal
                return <button key={id}>{image}</button>
            })}
        </div>
    );
};

export default Keyboard;