import React from 'react';

const GridField = ({children, onClick}) => {
    return (
        <div className="grid_field" onClick={onClick}>{children}</div>
    );
};

export default GridField;