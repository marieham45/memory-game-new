import {useState} from 'react';
import LevelButton from "../Buttons/LevelButton";
import StartButton from "../Buttons/StartButton";

const Levels = ({
                    setLimitForRemembering,
                    limitForRemembering,
                    setLimitForPlayerInput,
                    limitForPlayerInput,
                    onGameStart
                }) => {
    const [showRules, setShowRules] = useState(false)
    const [limitColor, setLimitColor] = useState("")

    const levels = [
        {
            id: 0,
            title: "Beginner",
            limitForRemembering: 20,
            limitForPlayerInput: 30,
            color: "green_level",
            colorCode: "#3D8361"
        },
        {
            id: 1,
            title: "Advanced",
            limitForRemembering: 15,
            limitForPlayerInput: 20,
            color: "orange_level",
            colorCode: "#e4685d"
        },
        {
            id: 2,
            title: "Hardcore",
            limitForRemembering: 10,
            limitForPlayerInput: 15,
            color: "blue_level",
            colorCode: "cornflowerblue"
        }
    ]

    const handleLevelSelect = (limitForRemembering, limitForPlayerInput, colorCode) => {
        setShowRules(true)
        setLimitForRemembering(limitForRemembering)
        setLimitForPlayerInput(limitForPlayerInput)
        setLimitColor(colorCode)
    }
    return (
        <div>
            {levels.map(level => {
                const {id, title, limitForRemembering, limitForPlayerInput, color, colorCode} = level
                return <LevelButton color={color} key={id} onClick={() => handleLevelSelect(limitForRemembering, limitForPlayerInput, colorCode)}>{title}</LevelButton>

            })}
            {showRules &&
                <>
                    <p className="level_limits"><span style={{color: limitColor, fontWeight: "bold"}}>{limitForRemembering}</span> seconds to remember, <br/>
                        <span style={{color: limitColor, fontWeight: "bold"}}>{limitForPlayerInput}</span> seconds to complete the
                        challenge</p>
                    <StartButton onClick={onGameStart}>I'm ready, let's start!</StartButton>
                </>
            }
        </div>
    );
};

export default Levels;