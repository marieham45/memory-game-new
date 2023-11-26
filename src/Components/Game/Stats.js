
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
            <p className="stats_level">Level Beginner</p>
            {beginnerCorrectCount ? <>
                <div className="column-graph">

                    {Object.entries(beginnerCorrectCount).map(([label, value], index) => (
                        <div key={index} className="column green_level"
                             style={{height: `${Math.round(value / beginnerAttempts) * 75 + 26}%`}}>
                            <span>{Math.round(value / beginnerAttempts) * 100}%<br/>({value})</span>
                        </div>
                    ))}

                </div>
                <div className="column-label">
                    {Object.entries(beginnerCorrectCount).map((_, index) => (
                            <p key={index}>{index}</p>
                        )
                    )}
                </div>
            </> : <p style={{height: "21%"}}>No stats yet...</p>}
            <hr/>
            <p className="stats_level">Level Advanced</p>
            {advancedCorrectCount ? <> <div className="column-graph">

                {Object.entries(advancedCorrectCount).map(([label, value], index) => (
                    <div key={index} className="column orange_level"
                         style={{height: `${Math.round(value / advancedAttempts) * 75 + 26}%`}}>
                        <span>{Math.round(value / advancedAttempts) * 100}%<br/>({value})</span>
                    </div>
                ))}

            </div>
             <div className="column-label">
                {Object.entries(advancedCorrectCount).map((_, index) => (
                    <p key={index}>{index}</p>
                ))}
            </div>
            </> : <p style={{height: "21%"}}>No stats yet...</p>}<hr/>
            <p className="stats_level">Level Hardcore</p>
            {hardcoreCorrectCount ? <> <div className="column-graph">

                {Object.entries(hardcoreCorrectCount).map(([label, value], index) => (
                    <div key={index} className="column blue_level"
                         style={{height: `${Math.round(value / hardcoreAttempts) * 75 + 26}%`}}>
                        <span>{Math.round(value / hardcoreAttempts) * 100}%<br/>({value})</span>
                    </div>
                ))}

            </div>
            <div className="column-label">
                {Object.entries(hardcoreCorrectCount).map((_, index) => (
                    <p key={index}>{index}</p>
                ))}
            </div>
            </> : <p style={{height: "21%"}}>No stats yet...</p>}
        </div>

    );
};

export default Stats;