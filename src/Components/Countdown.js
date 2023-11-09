import {useEffect, useState} from 'react';

const Countdown = ({limitForPlayerInput}) => {
    const [limit, setLimit] = useState(limitForPlayerInput - 5)


    useEffect(() => {
        const timer = setTimeout(() => {
            setLimit(limit - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [limit]);

    return (
        <div className="countdown">You have {limit} seconds left!</div>
    );
};

export default Countdown;