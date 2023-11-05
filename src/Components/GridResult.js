const GridResult = ({resultAnimals}) => {

    return (
        <div className="grid">
            <div className="row">
                <div className="grid_field">{resultAnimals[0].state === "correct" ? resultAnimals[0].image : "!"}</div>
                <div className="grid_field">{resultAnimals[1].state === "correct" ? resultAnimals[1].image : "!"}</div>
                <div className="grid_field">{resultAnimals[2].state === "correct" ? resultAnimals[2].image : "!"}</div>
            </div>
            <div className="row">
                <div className="grid_field">{resultAnimals[3].state === "correct" ? resultAnimals[3].image : "!"}</div>
                <div className="grid_field">{resultAnimals[4].state === "correct" ? resultAnimals[4].image : "!"}</div>
                <div className="grid_field">{resultAnimals[5].state === "correct" ? resultAnimals[5].image : "!"}</div>
            </div>
            <div className="row">
                <div className="grid_field">{resultAnimals[6].state === "correct" ? resultAnimals[6].image : "!"}</div>
                <div className="grid_field">{resultAnimals[7].state === "correct" ? resultAnimals[7].image : "!"}</div>
                <div className="grid_field">{resultAnimals[8].state === "correct" ? resultAnimals[8].image : "!"}</div>
            </div>

        </div>
    );
};

export default GridResult;