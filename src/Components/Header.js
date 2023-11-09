import Countdown from "./Countdown";
import Instructions from "./Instructions";
import Title from "./Title";
import Result from "./Result";
import InstructionAddAnimals from "./InstructionAddAnimals";
import {useEffect, useState} from "react";

const Header = ({isGameOn, showGameRules, limitForPlayerInput, showHeading, showResult, limitForRemembering, skillEvaluation}) => {
const [showCountDown, setShowCountDown] = useState(false)

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

   useEffect(() => {
       if (showGameRules) {
           const timer = setTimeout(() => {
                   setShowCountDown(true)
               }, 5000
           )
           return () => {
               clearTimeout(timer);
               setShowCountDown(false)
           }
       }


   }, [showGameRules])

    return (
        <header className={`header ${skillEvaluationColorClassName && skillEvaluationColorClassName}`}>
            {showResult && <Result skillEvaluation={skillEvaluation}/>}
            {showHeading && !isGameOn && <Title/>}
            {showGameRules &&
                <div className="game_rules">
                    {!showCountDown && <InstructionAddAnimals/>}
                    {showCountDown && <Countdown limitForPlayerInput={limitForPlayerInput}/>}
                </div>}
        </header>
    );
};

export default Header;