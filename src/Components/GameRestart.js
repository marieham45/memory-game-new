
const GameRestart = ({onTryAgain, setOnReturn, setShowHomeScreen, setShowGameRestartOptions, resetGameWithSameLevel}) => {

    const handleDifferentLevel = () => {
        setOnReturn(true)
        setShowHomeScreen(true)
        setShowGameRestartOptions(false)
        resetGameWithSameLevel()
    }
    return (
        <div>
            <button className="home_screen_button" onClick={onTryAgain}>Same level</button>
            <button className="home_screen_button" onClick={handleDifferentLevel}>Different level</button>
        </div>
    );
};

export default GameRestart;