import Countdown from "./Countdown";
import Instructions from "./Instructions";
import Title from "./Title";
import Result from "./Result";
import InstructionAddAnimals from "./InstructionAddAnimals";

const Header = ({isGameOn, showCountdown, limitForPlayerInput, showHeading, showResult, limitForRemembering, skillEvaluation}) => {

    let skillEvaluationColorClassName = ""
    switch(skillEvaluation) {
        case "Loser!":
            skillEvaluationColorClassName = "loser";
            break;
        case "Good effort!":
            skillEvaluationColorClassName = "good_effort";
            break;
        case "Well done!":
            skillEvaluationColorClassName = "well_done";
            break;
        case "Nearly perfect!":
            skillEvaluationColorClassName = "nearly_perfect";
            break;
        case "Unbelievable!":
            skillEvaluationColorClassName = "unbelievable";
            break;
    }

    return (
        <header className={`header ${skillEvaluationColorClassName && skillEvaluationColorClassName}`}>
            {showResult && <Result skillEvaluation={skillEvaluation}/>}
            {showHeading && (isGameOn ? <Instructions limitForRemembering={limitForRemembering}/> : <Title/>)}
            {showCountdown &&
                <>
                <InstructionAddAnimals/>
                <Countdown limitForPlayerInput={limitForPlayerInput} />
                </>}
        </header>
    );
};

export default Header;