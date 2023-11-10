
const HomeScreen = ({setShowHomeScreen, setShowRules}) => {
    return (
        <div className=".home_screen">
            <button className="home_screen_button" onClick={setShowRules}>What are the rules?</button>
            <button className="home_screen_button" onClick={setShowHomeScreen}>Take me to the game!</button>
        </div>
    );
};

export default HomeScreen;