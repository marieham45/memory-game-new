import GridField from "./GridField";

const Grid = ({animalsToRemember}) => {

    return (
        <div className="grid">
            {animalsToRemember.map(animal => <GridField>{animal}</GridField>)}
        </div>
    );
};

export default Grid;