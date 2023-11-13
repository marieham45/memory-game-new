import Title from "./Title";
import Penguin from "./Penguin";
import Rules from "./Rules";
import {useState} from "react";
import Levels from "./Levels";
import HomeScreenButton from "../Buttons/HomeScreenButton";

const HomeScreen = ({
                        setLimitForRemembering, limitForRemembering, setLimitForPlayerInput, limitForPlayerInput,
                        onGameStart, onReset, onReturn
                    }) => {
    const [showRules, setShowRules] = useState(false)
    const [showLevels, setShowLevels] = useState(onReturn)

    const handleGoToGame = () => {
        setShowLevels(true)
        setShowRules(false)
    }

    return (
        <div className=".home_screen">
            {!showRules && !showLevels &&
                <>
                    <Title/>
                    <Penguin/>
                    <HomeScreenButton onClick={() => setShowRules(true)}>What are <br/> the rules?</HomeScreenButton>
                    <HomeScreenButton onClick={handleGoToGame}>Take me to <br/> the game!</HomeScreenButton>
                </>
            }
            {!showRules && showLevels &&
                <Levels setLimitForRemembering={setLimitForRemembering} limitForRemembering={limitForRemembering}
                        setLimitForPlayerInput={setLimitForPlayerInput} limitForPlayerInput={limitForPlayerInput}
                        onReset={onReset} onGameStart={onGameStart} setShowRules={setShowRules} setShowLevels={setShowLevels}
                />
            }
            {showRules && <Rules onGoToGame={handleGoToGame}/>}
        </div>
    );
};

export default HomeScreen;