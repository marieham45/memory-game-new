import ResetButton from "../Buttons/ResetButton";

const Reset = ({setShowGameRestartOptions, onReset, setShowStats}) => {
    return (
        <div>
            <ResetButton onClick={() => setShowGameRestartOptions(true)}>Try again!</ResetButton>
            <ResetButton onClick={onReset}>Back to homepage</ResetButton>
            <ResetButton onClick={() => setShowStats(true)} >Show stats</ResetButton>
        </div>

    );
};

export default Reset;