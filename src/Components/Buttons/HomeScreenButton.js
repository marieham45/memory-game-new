import React from 'react';

const HomeScreenButton = ({children, onClick}) => {
    return (
        <button className="home_screen_button" onClick={onClick}>
            {children}
        </button>
    );
};

export default HomeScreenButton;