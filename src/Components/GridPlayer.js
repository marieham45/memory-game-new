import {useEffect, useState} from 'react';

const GridPlayer = ({keyboardValue, setPlayerInput}) => {

    const [input, setInput] = useState({
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        input6: "",
        input7: "",
        input8: "",
        input9: "",
    })

    useEffect(() => {
        const playerInput = [];
        playerInput.push(input.input1)
        playerInput.push(input.input2)
        playerInput.push(input.input3)
        playerInput.push(input.input4)
        playerInput.push(input.input5)
        playerInput.push(input.input6)
        playerInput.push(input.input7)
        playerInput.push(input.input8)
        playerInput.push(input.input9)

        setPlayerInput([...playerInput])
    }, [setPlayerInput, input])

    return (
        <div className="grid">
                <div className="grid_field" onClick={() =>      setInput((prevState) => {
                    return { ...prevState, input1: keyboardValue };
                })}>{input.input1}</div>
            <div className="grid_field" onClick={() =>      setInput((prevState) => {
                return { ...prevState, input2: keyboardValue };
            })}>{input.input2}</div>
            <div className="grid_field" onClick={() =>      setInput((prevState) => {
                return { ...prevState, input3: keyboardValue };
            })}>{input.input3}</div>
            <div className="grid_field" onClick={() =>      setInput((prevState) => {
                return { ...prevState, input4: keyboardValue };
            })}>{input.input4}</div>
            <div className="grid_field" onClick={() =>      setInput((prevState) => {
                return { ...prevState, input5: keyboardValue };
            })}>{input.input5}</div>
            <div className="grid_field" onClick={() =>      setInput((prevState) => {
                return { ...prevState, input6: keyboardValue };
            })}>{input.input6}</div>
            <div className="grid_field" onClick={() =>      setInput((prevState) => {
                return { ...prevState, input7: keyboardValue };
            })}>{input.input7}</div>
            <div className="grid_field" onClick={() =>      setInput((prevState) => {
                return { ...prevState, input8: keyboardValue };
            })}>{input.input8}</div>
            <div className="grid_field" onClick={() =>      setInput((prevState) => {
                return { ...prevState, input9: keyboardValue };
            })}>{input.input9}</div>

        </div>
    );
};

export default GridPlayer;