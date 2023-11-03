import {useEffect, useState} from 'react';

const GridPlayer = ({keyboardValue, setPlayerInput}) => {

    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [input3, setInput3] = useState("")
    const [input4, setInput4] = useState("")
    const [input5, setInput5] = useState("")
    const [input6, setInput6] = useState("")
    const [input7, setInput7] = useState("")
    const [input8, setInput8] = useState("")
    const [input9, setInput9] = useState("")

    useEffect(() => {
        const playerInput = [];
        playerInput.push(input1)
        playerInput.push(input2)
        playerInput.push(input3)
        playerInput.push(input4)
        playerInput.push(input5)
        playerInput.push(input6)
        playerInput.push(input7)
        playerInput.push(input8)
        playerInput.push(input9)

        setPlayerInput([...playerInput])
    }, [setPlayerInput, input1, input2, input3, input4, input5, input6, input7, input8, input9])

    return (
        <div className="grid">
            <div className="row">
                <input value={input1} className="grid_field" onClick={() => setInput1(keyboardValue)}
                       onChange={() => setInput1(keyboardValue)}></input>
                <input value={input2} className="grid_field" onClick={() => setInput2(keyboardValue)}
                       onChange={() => setInput2(keyboardValue)}></input>
                <input value={input3} className="grid_field" onClick={() => setInput3(keyboardValue)}
                       onChange={() => setInput3(keyboardValue)}></input>
            </div>
            <div className="row">
                <input value={input4} className="grid_field" onClick={() => setInput4(keyboardValue)}
                       onChange={() => setInput4(keyboardValue)}></input>
                <input value={input5} className="grid_field" onClick={() => setInput5(keyboardValue)}
                       onChange={() => setInput5(keyboardValue)}></input>
                <input value={input6} className="grid_field" onClick={() => setInput6(keyboardValue)}
                       onChange={() => setInput6(keyboardValue)}></input>
            </div>
            <div className="row">
                <input value={input7} className="grid_field" onClick={() => setInput7(keyboardValue)}
                       onChange={() => setInput7(keyboardValue)}></input>
                <input value={input8} className="grid_field" onClick={() => setInput8(keyboardValue)}
                       onChange={() => setInput8(keyboardValue)}></input>
                <input value={input9} className="grid_field" onClick={() => setInput9(keyboardValue)}
                       onChange={() => setInput9(keyboardValue)}></input>
            </div>

        </div>
    );
};

export default GridPlayer;