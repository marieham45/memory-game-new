import {useEffect, useState, useRef} from "react";
import {animals} from "../Data";
import Header from "./Header";
import Grid from "./Grid";
import Keyboard from "./Keyboard";
import ResultButton from "./ResultButton";
import Reset from "./Reset";
import GridPlayer from "./GridPlayer";
import GridResult from "./GridResult";
import Verdict from "./Verdict";
import HomeScreen from "./HomeScreen";
import GameRestart from "./GameRestart";

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
    }

    const resetGameWithSameLevel = () => {
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
        resetGameWithSameLevel()
        handleGameStart()
    }

    const handleReset = () => {
        resetGameWithSameLevel()
        setOnReturn(false)
        setLimitForRemembering(0)
        setLimitForPlayerInput(0)
        setShowHomeScreen(true)
        setShowGameRestartOptions(false)
    }


    return <div className="app">
        // showing home screen
        {!showGameRestartOptions && showHomeScreen &&
            <HomeScreen setLimitForRemembering={setLimitForRemembering}
                        limitForRemembering={limitForRemembering}
                        setLimitForPlayerInput={setLimitForPlayerInput}
                        limitForPlayerInput={limitForPlayerInput}
                        setShowHomeScreen={setShowHomeScreen}
                        onGameStart={handleGameStart}
                        onReturn={onReturn}
            />}

        // game is on
        {!showGameRestartOptions && !showHomeScreen &&
            <>
                <Header showCountdown={showCountdown}
                        limitForPlayerInput={limitForPlayerInput}
                        showResult={showResult}
                        skillEvaluation={skillEvaluation}/>
                {!showCountdown && !showResult &&
                    <Grid animalsToRemember={animalsToRemember} showAnimalsToRemember={showAnimalsToRemember}/>}
                {showCountdown && !showResult &&
                    <>
                        <GridPlayer keyboardValue={keyboardValue} setPlayerInput={setPlayerInput}/>
                        <Keyboard data={animals} setKeyboardValue={setKeyboardValue}/>
                        <ResultButton onResult={handleResult}/>
                    </>
                }
                {!showCountdown && showResult &&
                    <>
                        <GridResult resultAnimals={resultAnimals} playerInput={playerInput}/>
                        <Verdict correctCount={correctCount}/>
                        <Reset onReset={handleReset} setShowGameRestartOptions={setShowGameRestartOptions}/>
                    </>
                }
            </>
        }

        // game restart options
        {showGameRestartOptions && !showHomeScreen && <GameRestart onTryAgain={handleTryAgain}
                                                                   setOnReturn={setOnReturn}
                                                                   setShowHomeScreen={setShowHomeScreen}
                                                                   setShowGameRestartOptions={setShowGameRestartOptions}
                                                                   resetGameWithSameLevel={resetGameWithSameLevel}/>}

    </div>;
};

export default App;
