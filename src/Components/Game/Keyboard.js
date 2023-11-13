
const Keyboard = ({data, setKeyboardValue, keyboardValue}) => {

    return (
        <div className="keyboard">
            {data.map(animal => {
                const {id, image} = animal
                return <button className={keyboardValue === image? "selected" : ""} onClick={() => setKeyboardValue(image)} key={id}>{image}</button>
            })}
        </div>
    );
};

export default Keyboard;