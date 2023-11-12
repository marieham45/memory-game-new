import {useState} from 'react';
import HomeScreenButton from "../Buttons/HomeScreenButton";
import LevelButton from "../Buttons/LevelButton";

const Levels = ({
                    setLimitForRemembering,
                    limitForRemembering,
                    setLimitForPlayerInput,
                    limitForPlayerInput,
                    onGameStart
                }) => {
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
                return <LevelButton key={id} onClick={() => onLevelSelect(limitForRemembering, limitForPlayerInput)}>{title}</LevelButton>

            })}
            {showRules &&
                <>
                    <p>{limitForRemembering} seconds to remember, <br/> {limitForPlayerInput} seconds to complete the
                        challenge</p>
                    <HomeScreenButton onClick={onGameStart}>I'm ready, let's start!</HomeScreenButton>
                </>
            }
        </div>
    );
};

export default Levels;