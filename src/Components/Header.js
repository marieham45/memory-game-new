import React from 'react';
import Countdown from "./Countdown";

const Header = ({isGameOn}) => {
    return (
        <header className="header">
            {isGameOn ? <h1 style={{fontSize: "2.5rem"}}>You have 15 seconds to remeber all the animals!</h1> : <h1>The Great Memory Game</h1>}
            <Countdown/>
        </header>
    );
};

export default Header;