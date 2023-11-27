import React from 'react';

const LevelStats = ({level, correctCount, attempts}) => {
    console.log({level, correctCount, attempts})
    return (
        <>
            <p className="stats_level">Level {level}</p>
            {correctCount ? <>
                <div className="column-graph">

                    {Object.values(correctCount).map((value, index) => (
                        <div key={index} className={`column ${level === "Beginner" ? "green_level" : level === "Advanced" ? "orange_level" : "blue_level"}`}
                             style={{height: `${Math.round(value / attempts * 75) + 26}%`}}>
                            <span>{Math.round(value / attempts * 100)}%<br/>({value})</span>
                        </div>
                    ))}

                </div>
                <div className="column-label">
                    {Object.entries(correctCount).map((_, index) => (
                            <p key={index}>{index}</p>
                        )
                    )}
                </div>
            </> : <p className="no_stats">No stats yet...</p>}


        </>
    );
};

export default LevelStats;