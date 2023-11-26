import {useEffect, useState, useRef} from "react";
import {animals} from "./Data";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import GameRestart from "./Components/GameRestart/GameRestart";
import Game from "./Components/Game/Game";
import {useLocalStorage, useReadLocalStorage} from "usehooks-ts";


const App = () => {
    const [limitForRemembering, setLimitForRemembering] = useState(0)
    const [limitForPlayerInput, setLimitForPlayerInput] = useState(0)

    const [showHomeScreen, setShowHomeScreen] = useState(true)
    const [showCountdown, setShowCountdown] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [animalsToRemember, setAnimalsToRemember] = useState([]);
    const [showAnimalsToRemember, setShowAnimalsToRemember] = useState(false);
    const [keyboardValue, setKeyboardValue] = useState("");
    const [playerInput, setPlayerInput] = useState([]);
    const [resultAnimals, setResultAnimals] = useState([]);
    const [skillEvaluation, setSkillEvaluation] = useState("")
    const [correctCount, setCorrectCount] = useState(0)
    const [showGameRestartOptions, setShowGameRestartOptions] = useState(false)
    const [onReturn, setOnReturn] = useState(false)

    const timeoutRef = useRef(null);
    const playerInputRef = useRef(playerInput);

    // local storage stats
    const [beginnerCorrectCount, setBeginnerCorrectCount] = useLocalStorage("beginnerCorrectCount",
        {zero: 0, one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0})
    const [advancedCorrectCount, setAdvancedCorrectCount] = useLocalStorage("advancedCorrectCount",
        {zero: 0, one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0})
    const [hardcoreCorrectCount, setHardcoreCorrectCount] = useLocalStorage("hardcoreCorrectCount",
        {zero: 0, one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0})

    const handleStats = (correctCount) => {
        if (limitForRemembering === 20) {
            switch (correctCount) {
                case 0:
                    setBeginnerCorrectCount({...beginnerCorrectCount, zero: beginnerCorrectCount.zero + 1})
                    break
                case 1:
                    setBeginnerCorrectCount({...beginnerCorrectCount, one: beginnerCorrectCount.one + 1})
                    break
                case 2:
                    setBeginnerCorrectCount({...beginnerCorrectCount, two: beginnerCorrectCount.two + 1})
                    break
                case 3:
                    setBeginnerCorrectCount({...beginnerCorrectCount, three: beginnerCorrectCount.three + 1})
                    break
                case 4:
                    setBeginnerCorrectCount({...beginnerCorrectCount, four: beginnerCorrectCount.four + 1})
                    break
                case 5:
                    setBeginnerCorrectCount({...beginnerCorrectCount, five: beginnerCorrectCount.five + 1})
                    break
                case 6:
                    setBeginnerCorrectCount({...beginnerCorrectCount, six: beginnerCorrectCount.six + 1})
                    break
                case 7:
                    setBeginnerCorrectCount({...beginnerCorrectCount, seven: beginnerCorrectCount.seven + 1})
                    break
                case 8:
                    setBeginnerCorrectCount({...beginnerCorrectCount, eight: beginnerCorrectCount.eight + 1})
                    break
                case 9:
                    setBeginnerCorrectCount({...beginnerCorrectCount, nine: beginnerCorrectCount.nine + 1})
                    break
            }
        } else if (limitForRemembering === 15) {
            switch (correctCount) {
                case 0:
                    setAdvancedCorrectCount({...advancedCorrectCount, zero: advancedCorrectCount.zero + 1})
                    break
                case 1:
                    setAdvancedCorrectCount({...advancedCorrectCount, one: advancedCorrectCount.one + 1})
                    break
                case 2:
                    setAdvancedCorrectCount({...advancedCorrectCount, two: advancedCorrectCount.two + 1})
                    break
                case 3:
                    setAdvancedCorrectCount({...advancedCorrectCount, three: advancedCorrectCount.three + 1})
                    break
                case 4:
                    setAdvancedCorrectCount({...advancedCorrectCount, four: advancedCorrectCount.four + 1})
                    break
                case 5:
                    setAdvancedCorrectCount({...advancedCorrectCount, five: advancedCorrectCount.five + 1})
                    break
                case 6:
                    setAdvancedCorrectCount({...advancedCorrectCount, six: advancedCorrectCount.six + 1})
                    break
                case 7:
                    setAdvancedCorrectCount({...advancedCorrectCount, seven: advancedCorrectCount.seven + 1})
                    break
                case 8:
                    setAdvancedCorrectCount({...advancedCorrectCount, eight: advancedCorrectCount.eight + 1})
                    break
                case 9:
                    setAdvancedCorrectCount({...advancedCorrectCount, nine: advancedCorrectCount.nine + 1})
                    break
            }
        } else if (limitForRemembering === 10) {
            switch (correctCount) {
                case 0:
                    setHardcoreCorrectCount({...hardcoreCorrectCount, zero: hardcoreCorrectCount.zero + 1})
                    break
                case 1:
                    setHardcoreCorrectCount({...hardcoreCorrectCount, one: hardcoreCorrectCount.one + 1})
                    break
                case 2:
                    setHardcoreCorrectCount({...hardcoreCorrectCount, two: hardcoreCorrectCount.two + 1})
                    break
                case 3:
                    setHardcoreCorrectCount({...hardcoreCorrectCount, three: hardcoreCorrectCount.three + 1})
                    break
                case 4:
                    setHardcoreCorrectCount({...hardcoreCorrectCount, four: hardcoreCorrectCount.four + 1})
                    break
                case 5:
                    setHardcoreCorrectCount({...hardcoreCorrectCount, five: hardcoreCorrectCount.five + 1})
                    break
                case 6:
                    setHardcoreCorrectCount({...hardcoreCorrectCount, six: hardcoreCorrectCount.six + 1})
                    break
                case 7:
                    setHardcoreCorrectCount({...hardcoreCorrectCount, seven: hardcoreCorrectCount.seven + 1})
                    break
                case 8:
                    setHardcoreCorrectCount({...hardcoreCorrectCount, eight: hardcoreCorrectCount.eight + 1})
                    break
                case 9:
                    setHardcoreCorrectCount({...hardcoreCorrectCount, nine: hardcoreCorrectCount.nine + 1})
                    break
            }}
    }

    const handleGameStart = () => {
        setShowHomeScreen(false)
        setShowAnimalsToRemember(true);
        setAnimalsToRemember(() => {
            const animalsToRemember = [];
            for (let i = 0; i < 9; i++) {
                animalsToRemember.push(animals[Math.floor(Math.random() * animals.length)].image);
            }
            return animalsToRemember;
        });

        setTimeout(() => {
            setShowCountdown(true);
            setShowAnimalsToRemember(false);
        }, limitForRemembering * 1000);
    }

    useEffect(() => {
        if (showCountdown) {
            timeoutRef.current = setTimeout(() => {
                handleResult();
                timeoutRef.current = null;
            }, limitForPlayerInput * 1000);
        } else {
            // Clear the timeout if showCountdown becomes false
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
        }
    }, [showCountdown]);

    // Update the playerInputRef when playerInput changes
    useEffect(() => {
        playerInputRef.current = playerInput;
    }, [playerInput]);



    const handleResult = () => {
        setShowResult(true);
        setShowCountdown(false);

        // Access playerInput from the ref
        const currentPlayerInput = playerInputRef.current;
        const result = animalsToRemember.map((animal, i) => {
            const state = animal === currentPlayerInput[i] ? "correct" : "incorrect";
            return {image: animal, state};
        });
        setResultAnimals(result);

        const correctCount = result.filter(item => item.state === "correct").length
        setCorrectCount(correctCount)

        switch (correctCount) {
            case 0:
                setSkillEvaluation("Loser!");
                break;
            case 1:
            case 2:
            case 3:
                setSkillEvaluation("Good effort!");
                break;
            case 4:
            case 5:
            case 6:
                setSkillEvaluation("Well done!");
                break;
            case 7:
            case 8:
                setSkillEvaluation("Nearly perfect!");
                break;
            case 9:
                setSkillEvaluation("Unbelievable!");
                break;
            default:
                setSkillEvaluation("Something went wrong...");
        }

        handleStats(correctCount)

    }


    const handleResetGameWithSameLevel = () => {
        setShowCountdown(false);
        setShowResult(false);
        setShowAnimalsToRemember(false)
        setAnimalsToRemember([]);
        setPlayerInput([]);
        setKeyboardValue("")
        setResultAnimals([]);
        setSkillEvaluation("")
        setCorrectCount(0)
        setShowGameRestartOptions(false)

    }
    const handleTryAgain = () => {
        handleResetGameWithSameLevel()
        handleGameStart()
    }

    const handleReset = () => {
        handleResetGameWithSameLevel()
        setOnReturn(false)
        setLimitForRemembering(0)
        setLimitForPlayerInput(0)
        setShowHomeScreen(true)
        setShowGameRestartOptions(false)
    }


    return <div className="app">
        {/*showing home screen*/}
        {!showGameRestartOptions && showHomeScreen &&
            <HomeScreen setLimitForRemembering={setLimitForRemembering}
                        limitForRemembering={limitForRemembering}
                        setLimitForPlayerInput={setLimitForPlayerInput}
                        limitForPlayerInput={limitForPlayerInput}
                        setShowHomeScreen={setShowHomeScreen}
                        onGameStart={handleGameStart}
                        onReset={handleReset}
                        onReturn={onReturn}
            />}

        {/*game is on*/}
        {!showGameRestartOptions && !showHomeScreen &&
            <Game showCountdown={showCountdown}
                  limitForPlayerInput={limitForPlayerInput}
                  showResult={showResult}
                  skillEvaluation={skillEvaluation}
                  animalsToRemember={animalsToRemember}
                  showAnimalsToRemember={showAnimalsToRemember}
                  setKeyboardValue={setKeyboardValue}
                  keyboardValue={keyboardValue}
                  setPlayerInput={setPlayerInput}
                  playerInput={playerInput}
                  onResult={handleResult}
                  resultAnimals={resultAnimals}
                  correctCount={correctCount}
                  setShowGameRestartOptions={setShowGameRestartOptions}
                  onReset={handleReset}
            />
        }

        {/*game restart options*/}
        {showGameRestartOptions && !showHomeScreen && <GameRestart onTryAgain={handleTryAgain}
                                                                   setOnReturn={setOnReturn}
                                                                   setShowHomeScreen={setShowHomeScreen}
                                                                   setShowGameRestartOptions={setShowGameRestartOptions}
                                                                   onResetGameWithSameLevel={handleResetGameWithSameLevel}/>}

    </div>;
};

export default App;
