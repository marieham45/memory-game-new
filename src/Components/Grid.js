const Grid = ({animalsToRemember}) => {

    return (
        <div className="grid">
            <div className="row">
                <div className="grid_field">{animalsToRemember[0]}</div>
                <div className="grid_field">{animalsToRemember[1]}</div>
                <div className="grid_field">{animalsToRemember[2]}</div>
            </div>
            <div className="row">
                <div className="grid_field">{animalsToRemember[3]}</div>
                <div className="grid_field">{animalsToRemember[4]}</div>
                <div className="grid_field">{animalsToRemember[5]}</div>
            </div>
            <div className="row">
                <div className="grid_field">{animalsToRemember[6]}</div>
                <div className="grid_field">{animalsToRemember[7]}</div>
                <div className="grid_field">{animalsToRemember[8]}</div>
            </div>

        </div>
    );
};

export default Grid;