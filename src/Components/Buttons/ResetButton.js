import React from 'react';

const ResetButton = ({children, onClick}) => {
    return (
        <button className="reset_btn" onClick={onClick}>
            {children}
        </button>
    );
};

export default ResetButton;