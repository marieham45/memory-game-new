import React, {useEffect, useState} from 'react';

const Countdown = () => {
const [limit, setLimit] = useState(10)

    useEffect( () => {
        const handleTimer = setInterval( () => {
            if (limit <= 0) {
                clearInterval(handleTimer)
            } else {
                setLimit(limit - 1);
            }
        }, 1000);
    });
    return (
        <div className="countdown">You have {limit} seconds left!</div>
    );
};

export default Countdown;