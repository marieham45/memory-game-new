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

const App = () => {
    const limitForRemembering = 5;
    const limitForPlayerInput = 10;

    const [isGameOn, setGameOn] = useState(false);
    const [showCountdown, setShowCountdown] = useState(false);
    const [showHeading, setShowHeading] = useState(true);
    const [showResult, setShowResult] = useState(false);
    const [animalsToRemember, setAnimalsToRemember] = useState([]);
    const [showAnimalsToRemember, setShowAnimalsToRemember] = useState(false);
    const [keyboardValue, setKeyboardValue] = useState("");
    const [playerInput, setPlayerInput] = useState([]);
    const [resultAnimals, setResultAnimals] = useState([]);

    const timeoutRef = useRef(null);
    const playerInputRef = useRef(playerInput);

    const handleGameStart = () => {
        setGameOn(true);
        setShowAnimalsToRemember(true);
        setAnimalsToRemember(a => {
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
    }

    // Update the playerInputRef when playerInput changes
    useEffect(() => {
        playerInputRef.current = playerInput;
    }, [playerInput]);

    return <div className="app">
        <Header isGameOn={isGameOn} showCountdown={showCountdown} showHeading={showHeading} showResult={showResult}
                limitForRemembering={limitForRemembering}/>
        {(!showCountdown && !showResult) &&
            <Grid animalsToRemember={animalsToRemember} showAnimalsToRemember={showAnimalsToRemember}/>}
        {showCountdown && <GridPlayer keyboardValue={keyboardValue} setPlayerInput={setPlayerInput}/>}
        {(!showCountdown && showResult) && <GridResult resultAnimals={resultAnimals} playerInput={playerInput}/>}
        {!isGameOn && <StartButton onGameStart={handleGameStart}/>}
        {showCountdown && <Keyboard data={animals} setKeyboardValue={setKeyboardValue}/>}
        {showCountdown && <ResultButton onResult={handleResult}/>}
        {showResult && <ResetButton onReset={handleReset}/>}
    </div>;
};

export default App;
