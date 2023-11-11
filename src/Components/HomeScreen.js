import Title from "./Title";
import Penguin from "./Penguin";

const HomeScreen = ({onGoToGame, setShowRules}) => {
    return (
        <div className=".home_screen">
            <Title/>
            <Penguin/>
            <button className="home_screen_button" onClick={setShowRules}>What are <br/> the rules?</button>
            <button className="home_screen_button" onClick={onGoToGame}>Take me to <br/> the game!</button>
        </div>
    );
};

export default HomeScreen;