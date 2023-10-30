import React from 'react';

const Instructions = ({limitForRemembering}) => {
    return (
        <h1 style={{fontSize: "2.5rem"}}>
            You have {limitForRemembering} seconds to remeber all the animals!
        </h1>
    );
};

export default Instructions;