import Countdown from "./Countdown";
import Result from "./Result";
import {useState} from "react";

const Header = ({ showGameRules, limitForPlayerInput, showResult, skillEvaluation}) => {

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
            {showGameRules && <Countdown limitForPlayerInput={limitForPlayerInput}/>}
        </header>
    );
};

export default Header;