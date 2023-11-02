import React from 'react';
import GridField from "./GridField";

const GridRow = ({data}) => {
    return (
        <div className="row">
            <GridField randomAnimal={data[1].image}/>
            <GridField randomAnimal={data[2].image}/>
            <GridField randomAnimal={data[3].image}/>
        </div>
    );
};

export default GridRow;