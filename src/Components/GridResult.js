import {useState} from "react";

const GridResult = ({resultAnimals, playerInput}) => {
    const [showOriginalInput1, setShowOriginalInput1] = useState(false)
    const [showOriginalInput2, setShowOriginalInput2] = useState(false)
    const [showOriginalInput3, setShowOriginalInput3] = useState(false)
    const [showOriginalInput4, setShowOriginalInput4] = useState(false)
    const [showOriginalInput5, setShowOriginalInput5] = useState(false)
    const [showOriginalInput6, setShowOriginalInput6] = useState(false)
    const [showOriginalInput7, setShowOriginalInput7] = useState(false)
    const [showOriginalInput8, setShowOriginalInput8] = useState(false)
    const [showOriginalInput9, setShowOriginalInput9] = useState(false)

    return (
        <div className="grid">
                <div
                    className={`grid_field ${resultAnimals[0].state === "correct" ? "green" : showOriginalInput1 ? "red" : "gray"}`}
                    onClick={
                        () => {
                            if (resultAnimals[0].state === "incorrect") setShowOriginalInput1(!showOriginalInput1)
                        }}>{showOriginalInput1 ? playerInput[0] : resultAnimals[0].image}</div>
                <div
                    className={`grid_field ${resultAnimals[1].state === "correct" ? "green" : showOriginalInput2 ? "red" : "gray"}`}
                    onClick={
                        () => {
                            if (resultAnimals[1].state === "incorrect") setShowOriginalInput2(!showOriginalInput2)
                        }}>{showOriginalInput2 ? playerInput[1] : resultAnimals[1].image}</div>
                <div
                    className={`grid_field ${resultAnimals[2].state === "correct" ? "green" : showOriginalInput3 ? "red" : "gray"}`}
                    onClick={
                        () => {
                            if (resultAnimals[2].state === "incorrect") setShowOriginalInput3(!showOriginalInput3)
                        }}>{showOriginalInput3 ? playerInput[2] : resultAnimals[2].image}</div>

                <div
                    className={`grid_field ${resultAnimals[3].state === "correct" ? "green" : showOriginalInput4 ? "red" : "gray"}`}
                    onClick={
                        () => {
                            if (resultAnimals[3].state === "incorrect") setShowOriginalInput4(!showOriginalInput4)
                        }}>{showOriginalInput4 ? playerInput[3] : resultAnimals[3].image}</div>
                <div
                    className={`grid_field ${resultAnimals[4].state === "correct" ? "green" : showOriginalInput5 ? "red" : "gray"}`}
                    onClick={
                        () => {
                            if (resultAnimals[4].state === "incorrect") setShowOriginalInput5(!showOriginalInput5)
                        }}>{showOriginalInput5 ? playerInput[4] : resultAnimals[4].image}</div>
                <div
                    className={`grid_field ${resultAnimals[5].state === "correct" ? "green" : showOriginalInput6 ? "red" : "gray"}`}
                    onClick={
                        () => {
                            if (resultAnimals[5].state === "incorrect") setShowOriginalInput6(!showOriginalInput6)
                        }}>{showOriginalInput6 ? playerInput[5] : resultAnimals[5].image}</div>

                <div
                    className={`grid_field ${resultAnimals[6].state === "correct" ? "green" : showOriginalInput7 ? "red" : "gray"}`}
                    onClick={
                        () => {
                            if (resultAnimals[6].state === "incorrect") setShowOriginalInput7(!showOriginalInput7)
                        }}>{showOriginalInput7 ? playerInput[6] : resultAnimals[6].image}</div>
                <div
                    className={`grid_field ${resultAnimals[7].state === "correct" ? "green" : showOriginalInput8 ? "red" : "gray"}`}
                    onClick={
                        () => {
                            if (resultAnimals[7].state === "incorrect") setShowOriginalInput8(!showOriginalInput8)
                        }}>{showOriginalInput8 ? playerInput[7] : resultAnimals[7].image}</div>
                <div
                    className={`grid_field ${resultAnimals[8].state === "correct" ? "green" : showOriginalInput9 ? "red" : "gray"}`}
                    onClick={
                        () => {
                            if (resultAnimals[8].state === "incorrect") setShowOriginalInput9(!showOriginalInput9)
                        }}>{showOriginalInput9 ? playerInput[8] : resultAnimals[8].image}</div>

        </div>
    );
};

export default GridResult;