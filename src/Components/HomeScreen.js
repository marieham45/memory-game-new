import Title from "./Title";
import Penguin from "./Penguin";
import Rules from "./Rules";
import {useState} from "react";
import Levels from "./Levels";

const HomeScreen = () => {
    const [showRules, setShowRules] = useState(false)
    const [showLevels, setShowLevels] = useState(false)

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
                    <button className="home_screen_button" onClick={() => setShowRules(true)}>What are <br/> the rules?</button>
                    <button className="home_screen_button" onClick={handleGoToGame}>Take me to <br/> the game!</button>
                </>
            }
            {!showRules && showLevels &&
                <Levels/>
            }
            {showRules && <Rules onGoToGame={handleGoToGame}/>}
        </div>
    );
};

export default HomeScreen;