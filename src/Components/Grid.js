import React, {useState} from 'react';
import GridRow from "./GridRow";

const Grid = ({data, animalsToRemember}) => {

    // todo: setting value based on game stage
    return (
        <div className="grid">
            <div className="row">
                <input value={animalsToRemember[0]} className="grid_field"></input>
                <input value={animalsToRemember[1]} className="grid_field"></input>
                <input value={animalsToRemember[2]} className="grid_field"></input>
            </div>
            <div className="row">
                <input value={animalsToRemember[3]} className="grid_field"></input>
                <input value={animalsToRemember[4]} className="grid_field"></input>
                <input value={animalsToRemember[5]} className="grid_field"></input>
            </div>
            <div className="row">
                <input value={animalsToRemember[6]} className="grid_field"></input>
                <input value={animalsToRemember[7]} className="grid_field"></input>
                <input value={animalsToRemember[8]} className="grid_field"></input>
            </div>

        </div>
    );
};

export default Grid;