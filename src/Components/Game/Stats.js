import LevelStats from "./LevelStats";
import React from "react";

const Stats = ({setShowStats}) => {
    const beginnerCorrectCount = JSON.parse(localStorage.getItem('beginnerCorrectCount')) || ""
    const advancedCorrectCount = JSON.parse(localStorage.getItem('advancedCorrectCount')) || ""
    const hardcoreCorrectCount = JSON.parse(localStorage.getItem('hardcoreCorrectCount')) || ""

    const beginnerAttempts = Object.values(beginnerCorrectCount).reduce((acc, value) => acc + value, 0) || 0;
    const advancedAttempts = Object.values(advancedCorrectCount).reduce((acc, value) => acc + value, 0) || 0;
    const hardcoreAttempts = Object.values(hardcoreCorrectCount).reduce((acc, value) => acc + value, 0) || 0;


    return (
        <div className='stats'>
            <button className="stats_button" onClick={() => setShowStats(false)}>✖</button>
            <LevelStats level="Beginner" correctCount={beginnerCorrectCount} attempts={beginnerAttempts}/>
            <hr/>
            <LevelStats level="Advanced" correctCount={advancedCorrectCount} attempts={advancedAttempts}/>
            <hr/>
            <LevelStats level="Hardcore" correctCount={hardcoreCorrectCount} attempts={hardcoreAttempts}/>
        </div>

    );
};

export default Stats;