import Slide from "../Slide/Slide"
import conocimientos from './conocimientos.json'

function Slider () {
    const keys = Object.keys(conocimientos);
    var index=0;
    return (
        keys.map ( (key) => {
            index++;
            return (
                <Slide key={index} url={conocimientos[key]}></Slide>
            )
        })
    )
}

export default Slider