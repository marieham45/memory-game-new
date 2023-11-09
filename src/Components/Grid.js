import GridField from "./GridField";

const Grid = ({animalsToRemember}) => {

    return (
        <div className="grid">
            {animalsToRemember.map((animal, i) => <GridField key={i}>{animal}</GridField>)}
        </div>
    );
};

export default Grid;