import React from 'react';

const ResultButton = ({onResult}) => {
    return (
        <button className="result_btn" onClick={onResult}>I'm done!</button>
    );
};

export default ResultButton;