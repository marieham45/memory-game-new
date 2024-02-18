import Title from "./Title";
import Penguin from "./Penguin";
import Rules from "./Rules";
import React, {useState} from "react";
import Levels from "./Levels";
import HomeScreenButton from "../Buttons/HomeScreenButton";
import Stats from "../Game/Stats";

const HomeScreen = ({
                        setLimitForRemembering, limitForRemembering, setLimitForPlayerInput, limitForPlayerInput,
                        onGameStart, onReset, onReturn
                    }) => {
    const [showRules, setShowRules] = useState(false)
    const [showLevels, setShowLevels] = useState(onReturn)
    const [showStats, setShowStats] = useState(false)

    const handleGoToGame = () => {
        setShowLevels(true)
        setShowRules(false)
    }

    return (
        <div className=".home_screen">
            {!showStats && !showRules && !showLevels &&
                <>
                    <Title/>
                    <Penguin/>
                    <HomeScreenButton onClick={() => setShowRules(true)}>What are <br/> the rules?</HomeScreenButton>
                    <HomeScreenButton onClick={handleGoToGame}>Take me to <br/> the game!</HomeScreenButton>
                    <HomeScreenButton onClick={() => setShowStats(true)}>Show my <br/>stats</HomeScreenButton>
                </>
            }
            {!showStats && !showRules && showLevels &&
                <Levels setLimitForRemembering={setLimitForRemembering} limitForRemembering={limitForRemembering}
                        setLimitForPlayerInput={setLimitForPlayerInput} limitForPlayerInput={limitForPlayerInput}
                        onReset={onReset} onGameStart={onGameStart} setShowRules={setShowRules} setShowLevels={setShowLevels}
                />
            }
            {!showStats && showRules && <Rules onGoToGame={handleGoToGame}/>}
            {showStats && <Stats setShowStats={setShowStats}/>}

        </div>
    );
};

export default HomeScreen;