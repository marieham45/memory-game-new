import {useState} from 'react';

const Levels = ({setLimitForRemembering, limitForRemembering, setLimitForPlayerInput, limitForPlayerInput, onGameStart}) => {
    const [showRules, setShowRules] = useState(false)

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

    const onLevelSelect = (limitForRemembering, limitForPlayerInput) => {
        setShowRules(true)
        setLimitForRemembering(limitForRemembering)
        setLimitForPlayerInput(limitForPlayerInput)
    }
    return (
        <div>
            {levels.map(level => {
                const {id, title, limitForRemembering, limitForPlayerInput} = level
                return <button className="level_button" key={id}
                               onClick={() => onLevelSelect(limitForRemembering, limitForPlayerInput)}>{title}</button>


            })}
            {showRules &&
                <>
                    <p>{limitForRemembering} seconds to remember, <br/> {limitForPlayerInput} seconds to complete the
                    challenge</p>
                    <button className="ready_button" onClick={onGameStart}>I'm ready, let's start!</button>

                </>
            }
        </div>
    );
};

export default Levels;