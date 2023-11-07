import {useEffect, useState, useRef} from "react";
import {animals} from "../Data";
import Header from "./Header";
import Grid from "./Grid";
import StartButton from "./StartButton";
import Keyboard from "./Keyboard";
import ResultButton from "./ResultButton";
import ResetButton from "./ResetButton";
import GridPlayer from "./GridPlayer";
import GridResult from "./GridResult";
import Verdict from "./Verdict";
import Penguin from "./Penguin";

const App = () => {
    const limitForRemembering = 10;
    const limitForPlayerInput = 20;

    const [isGameOn, setGameOn] = useState(false);
    const [showCountdown, setShowCountdown] = useState(false);
    const [showHeading, setShowHeading] = useState(true);
    const [showResult, setShowResult] = useState(false);
    const [animalsToRemember, setAnimalsToRemember] = useState([]);
    const [showAnimalsToRemember, setShowAnimalsToRemember] = useState(false);
    const [keyboardValue, setKeyboardValue] = useState("");
    const [playerInput, setPlayerInput] = useState([]);
    const [resultAnimals, setResultAnimals] = useState([]);
    const [skillEvaluation, setSkillEvaluation] = useState("")
    const [correctCount, setCorrectCount] = useState(0)

    const timeoutRef = useRef(null);
    const playerInputRef = useRef(playerInput);

    const handleGameStart = () => {
        setGameOn(true);
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
            setShowHeading(false);
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

    const handleResult = () => {
        setShowResult(true);
        setShowCountdown(false);

        // Access playerInput from the ref
        const currentPlayerInput = playerInputRef.current;
        const result = animalsToRemember.map((animal, i) => {
            const state = animal === currentPlayerInput[i] ? "correct" : "incorrect";
            return { image: animal, state };
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

    const handleReset = () => {
        setGameOn(false);
        setShowCountdown(false);
        setShowHeading(true);
        setShowResult(false);
        setShowAnimalsToRemember(false)
        setAnimalsToRemember([]);
        setPlayerInput([]);
        setKeyboardValue("")
        setResultAnimals([]);
        setSkillEvaluation("")
        setCorrectCount(0)
    }

    // Update the playerInputRef when playerInput changes
    useEffect(() => {
        playerInputRef.current = playerInput;
    }, [playerInput]);

    return <div className="app">
        <Header isGameOn={isGameOn} showCountdown={showCountdown} limitForPlayerInput={limitForPlayerInput} showHeading={showHeading} showResult={showResult}
                limitForRemembering={limitForRemembering} skillEvaluation={skillEvaluation}/>
        {!isGameOn && <Penguin/>}
        {(!showCountdown && !showResult) &&
            <Grid animalsToRemember={animalsToRemember} showAnimalsToRemember={showAnimalsToRemember}/>}
        {showCountdown && <GridPlayer keyboardValue={keyboardValue} setPlayerInput={setPlayerInput}/>}
        {(!showCountdown && showResult) && <GridResult resultAnimals={resultAnimals} playerInput={playerInput}/>}
        {!isGameOn && <StartButton onGameStart={handleGameStart}/>}
        {showCountdown && <Keyboard data={animals} setKeyboardValue={setKeyboardValue}/>}
        {showCountdown && <ResultButton onResult={handleResult}/>}
        {showResult &&
            <>
            <Verdict correctCount={correctCount}/>
            <ResetButton onReset={handleReset}/>
            </>}
    </div>;
};

export default App;
