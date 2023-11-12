import React from 'react';

const Keyboard = ({data, setKeyboardValue}) => {

    return (
        <div className="keyboard">
            {data.map(animal => {
                const {id, image} = animal
                return <button onClick={() => setKeyboardValue(image)} key={id}>{image}</button>
            })}
        </div>
    );
};

export default Keyboard;