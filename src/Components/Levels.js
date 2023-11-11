import React from 'react';

const Levels = () => {

    const levels = [
        {
            id: 0,
            title: "Beginner",
            limitForRemembering: 20,
            limitForPlayerInput: 30
        },
        {
            id: 1,
            title: "Advanced",
            limitForRemembering: 15,
            limitForPlayerInput: 20
        },
        {
            id: 2,
            title: "Hardcore",
            limitForRemembering: 10,
            limitForPlayerInput: 15
        }
    ]
    return ( // todo showing the rules onclick
        <div>
            {levels.map(level => {
                const {id, title, limitForRemembering, limitForPlayerInput} = level
                return <>
                    <button className="level_button" key={id}>{title}</button>
                    <p>Time limit to remember: {limitForRemembering} <br/> Time Limit to complete the challenge? {limitForPlayerInput}</p>
                </>

            })}

        </div>
    );
};

export default Levels;