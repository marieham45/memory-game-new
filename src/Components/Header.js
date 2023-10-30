import Countdown from "./Countdown";
import Instructions from "./Instructions";
import Title from "./Title";
import Result from "./Result";
import InstructionAddAnimals from "./InstructionAddAnimals";

const Header = ({isGameOn, showCountdown, showHeading, showResult, limitForRemembering}) => {

    return (
        <header className="header">
            {showResult && <Result/>}
            {showHeading && (isGameOn ? <Instructions limitForRemembering={limitForRemembering}/> : <Title/>)}
            {showCountdown &&
                <>
                <InstructionAddAnimals/>
                <Countdown/>
                </>}
        </header>
    );
};

export default Header;